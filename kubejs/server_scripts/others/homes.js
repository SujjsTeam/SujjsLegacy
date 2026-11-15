// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.

var HOMES_KEY = 'sujjslegacy_homes'
var OLD_HOME_KEY = 'named_homes'
var TELEPORT_TICKS = 100
var MAX_MOVE = 0.15
var NAME_PATTERN = /^[a-z0-9_-]{1,24}$/

var pendingHomes = {}

function homesDimension(level) {
    var dimension = level.dimension
    if (typeof dimension == 'function') return String(level.dimension().location())
    return String(dimension)
}

function homesUuid(player) {
    return String(player.uuid.toString())
}

function homesLoadAll(server) {
    var data = server.persistentData
    if (!data.contains(HOMES_KEY)) return {}
    try {
        return JSON.parse(String(data.getString(HOMES_KEY)))
    } catch (error) {
        return {}
    }
}

function homesSaveAll(server, all) {
    server.persistentData.putString(HOMES_KEY, JSON.stringify(all))
}

function homesGet(player) {
    var all = homesLoadAll(player.server)
    var uuid = homesUuid(player)
    if (all[uuid] == null) {
        all[uuid] = {}
        if (player.persistentData.contains(OLD_HOME_KEY)) {
            try {
                all[uuid] = JSON.parse(String(player.persistentData.getString(OLD_HOME_KEY)))
            } catch (error) {
                all[uuid] = {}
            }
            player.persistentData.remove(OLD_HOME_KEY)
            homesSaveAll(player.server, all)
        }
    }
    return all[uuid]
}

function homesSet(player, homes) {
    var all = homesLoadAll(player.server)
    all[homesUuid(player)] = homes
    homesSaveAll(player.server, all)
}

function homesName(ctx, Arguments) {
    return String(Arguments.STRING.getResult(ctx, 'name')).toLowerCase()
}

function homesSuggest(ctx, builder) {
    var player = ctx.source.player
    if (player == null) return builder.buildFuture()
    var input = String(builder.getRemaining()).toLowerCase()
    Object.keys(homesGet(player)).forEach(name => {
        if (name.indexOf(input) == 0) builder.suggest(name)
    })
    return builder.buildFuture()
}

function homesRepeat(text, count) {
    var out = ''
    for (var i = 0; i < count; i++) out += text
    return out
}

function homesStatus(player, text) {
    player.setStatusMessage(text)
}

function homesCancel(player, uuid, reason) {
    delete pendingHomes[uuid]
    homesStatus(player, '')
    player.tell(reason)
}

ServerEvents.commandRegistry(sujjslegacy => {
    var Commands = sujjslegacy.commands
    var Arguments = sujjslegacy.arguments

    sujjslegacy.register(Commands.literal('sethome')
        .then(Commands.argument('name', Arguments.STRING.create(sujjslegacy))
            .executes(ctx => {
                var player = ctx.source.player
                if (player == null) return 0
                var name = homesName(ctx, Arguments)
                if (!NAME_PATTERN.test(name)) {
                    player.tell('§c✗ Use only letters, numbers, - and _ (up to 24 characters).')
                    return 0
                }
                var homes = homesGet(player)
                var replaced = homes[name] != null
                homes[name] = {
                    dimension: homesDimension(player.level),
                    x: player.x,
                    y: player.y,
                    z: player.z,
                    yaw: player.yRot,
                    pitch: player.xRot
                }
                homesSet(player, homes)
                player.tell(replaced ? '§a✓ Home §f' + name + ' §ahas been updated!' : '§a✓ Home §f' + name + ' §ahas been set!')
                return 1
            })))

    sujjslegacy.register(Commands.literal('home')
        .executes(ctx => {
            var player = ctx.source.player
            if (player == null) return 0
            var names = Object.keys(homesGet(player))
            if (names.length == 0) {
                player.tell('§eYou do not have any homes. Use §f/sethome <name>§e.')
                return 1
            }
            player.tell('§6§lYour Homes:')
            names.sort().forEach(name => player.tell('§7• §f' + name))
            player.tell('§7Use §f/home <name> §7to teleport.')
            return 1
        })
        .then(Commands.argument('name', Arguments.STRING.create(sujjslegacy))
            .suggests((ctx, builder) => homesSuggest(ctx, builder))
            .executes(ctx => {
                var player = ctx.source.player
                if (player == null) return 0
                var uuid = homesUuid(player)
                var name = homesName(ctx, Arguments)
                var home = homesGet(player)[name]
                if (home == null) {
                    player.tell('§c✗ Home §f' + name + ' §cdoes not exist!')
                    return 0
                }
                if (pendingHomes[uuid] != null) {
                    player.tell('§e✗ You are already teleporting!')
                    return 0
                }
                pendingHomes[uuid] = {
                    x: player.x,
                    y: player.y,
                    z: player.z,
                    dimension: homesDimension(player.level),
                    ticks: 0,
                    home: home,
                    name: name
                }
                player.tell('§eTeleporting to §f' + name + ' §ein §f' + Math.round(TELEPORT_TICKS / 20) + ' seconds§e. §7Do not move!')
                return 1
            })))

    sujjslegacy.register(Commands.literal('delhome')
        .then(Commands.argument('name', Arguments.STRING.create(sujjslegacy))
            .suggests((ctx, builder) => homesSuggest(ctx, builder))
            .executes(ctx => {
                var player = ctx.source.player
                if (player == null) return 0
                var uuid = homesUuid(player)
                var name = homesName(ctx, Arguments)
                var homes = homesGet(player)
                if (homes[name] == null) {
                    player.tell('§c✗ Home §f' + name + ' §cdoes not exist!')
                    return 0
                }
                delete homes[name]
                homesSet(player, homes)
                if (pendingHomes[uuid] != null && pendingHomes[uuid].name == name) {
                    delete pendingHomes[uuid]
                    homesStatus(player, '')
                }
                player.tell('§a✓ Home §f' + name + ' §ahas been deleted!')
                return 1
            })))
})

ServerEvents.tick(sujjslegacy => {
    var server = sujjslegacy.server
    var uuids = Object.keys(pendingHomes)
    if (uuids.length == 0) return

    var online = {}
    server.players.forEach(p => { online[homesUuid(p)] = p })

    uuids.forEach(uuid => {
        var data = pendingHomes[uuid]
        var player = online[uuid]

        if (player == null) {
            delete pendingHomes[uuid]
            return
        }

        if (!player.isAlive()) {
            homesCancel(player, uuid, '§c✗ Teleport cancelled!')
            return
        }

        if (homesDimension(player.level) != data.dimension) {
            homesCancel(player, uuid, '§c✗ Teleport cancelled!')
            return
        }

        if (Math.abs(player.x - data.x) > MAX_MOVE || Math.abs(player.y - data.y) > MAX_MOVE || Math.abs(player.z - data.z) > MAX_MOVE) {
            homesCancel(player, uuid, '§c✗ Teleport cancelled because you moved!')
            return
        }

        data.ticks++

        if (data.ticks >= TELEPORT_TICKS) {
            var home = data.home
            delete pendingHomes[uuid]
            homesStatus(player, '')
            server.runCommandSilent('execute in ' + home.dimension + ' run tp ' + uuid + ' ' + home.x + ' ' + home.y + ' ' + home.z + ' ' + home.yaw + ' ' + home.pitch)
            server.runCommandSilent('execute in ' + home.dimension + ' run playsound minecraft:entity.enderman.teleport player ' + uuid + ' ' + home.x + ' ' + home.y + ' ' + home.z)
            player.tell('§a✓ Teleported to §f' + data.name + '§a!')
            return
        }

        var progress = Math.min(10, Math.floor((data.ticks / TELEPORT_TICKS) * 10))
        var remaining = Math.max(0, Math.ceil((TELEPORT_TICKS - data.ticks) / 20))
        var bar = '§a' + homesRepeat('█', progress) + '§8' + homesRepeat('░', 10 - progress)
        homesStatus(player, '§eTeleporting to §f' + data.name + ' §f[' + bar + '§f] §7' + remaining + 's')
    })
})

// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.
