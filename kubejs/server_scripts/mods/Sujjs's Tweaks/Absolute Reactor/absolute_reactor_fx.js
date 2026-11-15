// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.

const FX_REACTOR_ID = 'sujjslegacy:absolute_reactor'
const FX_CONTROLLER = 'modular_machinery_reborn:controller'
const FX_LASER_BLOCK = 'mekanismgenerators:laser_focus_matrix'
const FX_PILLAR_BLOCK = 'mekanism:block_refined_glowstone'
const FX_TAG = 'sujjs_reactor_beam'
const FX_SCAN_TICKS = 20
const FX_DISCOVER_TICKS = 100
const FX_FRAME_TICKS = 2
const FX_VIEW_RANGE = 160
const FX_FINISHED = 0.985

const FxParticles = Java.loadClass('net.minecraft.core.particles.ParticleTypes')

let FxDust = null
try {
    const FxDustOptions = Java.loadClass('net.minecraft.core.particles.DustParticleOptions')
    const FxVector = Java.loadClass('org.joml.Vector3f')
    FxDust = new FxDustOptions(new FxVector(0.30, 0.77, 0.23), 2.0)
} catch (erro) {
    FxDust = null
}

const FX_ACTIVE = {}

const fxDimension = level => {
    let dimension = level.dimension
    if (typeof dimension == 'function') return String(level.dimension().location())
    return String(dimension)
}

const fxPlayersOf = level => {
    let players = level.players
    if (typeof players == 'function') return level.players()
    return players
}

const fxKey = (level, pos) => `${fxDimension(level)}|${pos.x}|${pos.y}|${pos.z}`

const fxTag = pos => `sujjs_reactor_${pos.x}_${pos.y}_${pos.z}`.replace(/-/g, 'm')

const fxRun = (server, level, x, y, z, command) => {
    server.runCommandSilent(`execute in ${fxDimension(level)} positioned ${x} ${y} ${z} run ${command}`)
}

const fxSound = (server, level, point, sound, volume, pitch) => {
    fxRun(server, level, point.x, point.y, point.z, `playsound ${sound} block @a[distance=..96] ~ ~ ~ ${volume} ${pitch}`)
}

const fxLightning = (level, point) => {
    try {
        let bolt = level.createEntity('minecraft:lightning_bolt')
        bolt.setPos(point.x, point.y, point.z)
        bolt.setVisualOnly(true)
        level.addFreshEntity(bolt)
    } catch (erro) {
        console.warn(`[Absolute Reactor FX] Raio visual falhou: ${erro}`)
    }
}

const fxFindReactors = (level, pos, action) => {
    let chunkX = pos.x >> 4
    let chunkZ = pos.z >> 4
    let chunk = null
    for (let dx = -3; dx <= 3; dx++) {
        for (let dz = -3; dz <= 3; dz++) {
            chunk = level.getChunk(chunkX + dx, chunkZ + dz)
            chunk.getBlockEntities().forEach((controller, entity) => {
                try {
                    if (String(level.getBlock(controller).id) != FX_CONTROLLER) return
                    if (String(entity.getId()) != FX_REACTOR_ID) return
                    action(entity, controller)
                } catch (erro) {
                    console.error(`[Absolute Reactor FX] Erro no reator em ${controller}: ${erro}`)
                }
            })
        }
    }
}

const fxProgress = entity => {
    let best = 0
    entity.getProcessor().cores().forEach(core => {
        let total = core.getRecipeTotalTime()
        if (total > 0) best = Math.max(best, core.getRecipeProgressTime() / total)
    })
    return Math.min(1, Math.max(0, best))
}

const fxBuild = (server, level, entity, controller) => {
    let blocks = entity.getFoundMachine().getPattern().getBlocks(entity.getFacing())
    let lasers = []
    let pillars = []
    let minY = controller.y
    blocks.forEach((relative, ingredient) => {
        let pos = controller.offset(relative)
        if (pos.y < minY) minY = pos.y
        let id = String(level.getBlock(pos).id)
        if (id == FX_LASER_BLOCK) lasers.push(pos)
        else if (id == FX_PILLAR_BLOCK) pillars.push(pos)
    })
    if (lasers.length == 0) return null

    let maxY = lasers[0].y
    lasers.forEach(pos => { if (pos.y > maxY) maxY = pos.y })
    let top = lasers.filter(pos => pos.y == maxY)
    let towers = lasers.filter(pos => pos.y != maxY)

    let fx = 0
    let fz = 0
    top.forEach(pos => { fx += pos.x + 0.5; fz += pos.z + 0.5 })
    let focus = { x: fx / top.length, y: maxY + 1.5, z: fz / top.length }

    let state = {
        level: level,
        key: fxKey(level, controller),
        tag: fxTag(controller),
        controller: { x: controller.x, y: controller.y, z: controller.z },
        focus: focus,
        base: minY,
        towers: [],
        pillars: [],
        progress: 0,
        viewers: []
    }

    towers.forEach(pos => {
        let target = top[0]
        let bestDistance = 1e9
        top.forEach(candidate => {
            let d = Math.pow(candidate.x - pos.x, 2) + Math.pow(candidate.z - pos.z, 2)
            if (d < bestDistance) { bestDistance = d; target = candidate }
        })
        state.towers.push({
            crystal: { x: pos.x + 0.5, y: pos.y + 1, z: pos.z + 0.5 },
            target: { x: target.x, y: target.y + 1, z: target.z }
        })
    })

    pillars.forEach(pos => {
        state.pillars.push({ x: pos.x + 0.5, y: pos.y + 1.0, z: pos.z + 0.5 })
    })

    return state
}

const fxKillCrystals = (server, state) => {
    let c = state.controller
    fxRun(server, state.level, c.x, c.y, c.z, `kill @e[type=minecraft:end_crystal,tag=${state.tag},distance=..64]`)
}

const fxStart = (server, state) => {
    let c = state.controller
    console.info(`[Absolute Reactor FX] Animação ligada no reator em ${c.x} ${c.y} ${c.z} (${fxDimension(state.level)}): ${state.towers.length} torres, ${state.pillars.length} pilares${state.test ? ', modo teste' : ''}`)
    fxKillCrystals(server, state)
    state.towers.forEach(tower => {
        let p = tower.crystal
        let t = tower.target
        fxRun(server, state.level, p.x, p.y, p.z,
            `summon minecraft:end_crystal ~ ~ ~ {ShowBottom:0b,Invulnerable:1b,beam_target:[I;${t.x},${t.y},${t.z}],Tags:["${FX_TAG}","${state.tag}"]}`)
        fxLightning(state.level, p)
    })
    fxSound(server, state.level, state.focus, 'minecraft:block.beacon.activate', 4, 0.6)
    fxSound(server, state.level, state.focus, 'minecraft:block.conduit.activate', 4, 0.8)
}

const fxFinale = (server, state) => {
    let f = state.focus
    state.viewers = fxViewers(state)
    fxEmit(state, FxParticles.FLASH, f.x, f.y, f.z, 3, 0, 0, 0, 0)
    fxEmit(state, FxParticles.EXPLOSION_EMITTER, f.x, f.y, f.z, 2, 0.5, 0.5, 0.5, 0)
    fxEmit(state, FxParticles.TOTEM_OF_UNDYING, f.x, f.y, f.z, 300, 2, 2, 2, 0.8)
    fxEmit(state, FxParticles.END_ROD, f.x, f.y, f.z, 200, 1, 1, 1, 0.5)
    fxLightning(state.level, { x: f.x, y: f.y - 1, z: f.z })
    state.towers.forEach(tower => fxLightning(state.level, tower.crystal))
    fxSound(server, state.level, f, 'minecraft:entity.generic.explode', 6, 0.5)
    fxSound(server, state.level, f, 'minecraft:block.end_portal.spawn', 3, 1.2)
    fxSound(server, state.level, f, 'minecraft:ui.toast.challenge_complete', 2, 1)
    fxRun(server, state.level, f.x, f.y, f.z, `title @a[distance=..96] actionbar {"text":"The Absolute has been forged","color":"green","bold":true}`)
}

const fxStop = (server, state, finished) => {
    fxKillCrystals(server, state)
    if (finished) fxFinale(server, state)
    else fxSound(server, state.level, state.focus, 'minecraft:block.beacon.deactivate', 4, 0.6)
    delete FX_ACTIVE[state.key]
}

const fxViewers = state => {
    let list = []
    let f = state.focus
    fxPlayersOf(state.level).forEach(player => {
        if (player.distanceToSqr(f.x, f.y, f.z) <= FX_VIEW_RANGE * FX_VIEW_RANGE) list.push(player)
    })
    return list
}

const fxEmit = (state, type, x, y, z, count, dx, dy, dz, speed) => {
    if (type == null) return
    state.viewers.forEach(player => {
        state.level.sendParticles(player, type, true, x, y, z, count, dx, dy, dz, speed)
    })
}

const fxLerp = (a, b, t) => ({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, z: a.z + (b.z - a.z) * t })

const fxPulses = (state, from, to, tick, type, pulses, speed) => {
    for (let i = 0; i < pulses; i++) {
        let t = ((tick * speed) + i / pulses) % 1
        let p = fxLerp(from, to, t)
        fxEmit(state, type, p.x, p.y, p.z, 1, 0, 0, 0, 0)
    }
}

const fxFrame = (server, state, tick) => {
    state.viewers = fxViewers(state)
    if (state.viewers.length == 0) return

    let f = state.focus
    let p = state.progress
    let pulseSpeed = 0.012 + p * 0.03

    state.towers.forEach(tower => {
        let start = { x: tower.crystal.x, y: tower.crystal.y + 0.5, z: tower.crystal.z }
        fxPulses(state, start, f, tick, FxParticles.END_ROD, 3 + Math.floor(p * 4), pulseSpeed)
        if (tick % 10 == 0) fxEmit(state, FxParticles.ELECTRIC_SPARK, start.x, start.y, start.z, 6, 0.4, 0.4, 0.4, 0.2)
    })

    if (p >= 0.25) {
        state.pillars.forEach(pillar => {
            fxPulses(state, pillar, f, tick, FxParticles.ELECTRIC_SPARK, 4, pulseSpeed * 1.5)
            fxPulses(state, pillar, f, tick + 7, FxParticles.SOUL_FIRE_FLAME, 2, pulseSpeed)
        })
    }

    if (p >= 0.5) {
        let height = Math.max(1, f.y - state.base)
        for (let k = 0; k < 4; k++) {
            let angle = tick * 0.12 + k * Math.PI / 2
            let y = state.base + ((tick * 0.15 + k * height / 4) % height)
            fxEmit(state, FxDust != null ? FxDust : FxParticles.GLOW,
                f.x + Math.cos(angle) * 4.5, y, f.z + Math.sin(angle) * 4.5, 2, 0.05, 0.05, 0.05, 0)
        }
    }

    if (p >= 0.75) {
        for (let k = 0; k < 6; k++) {
            fxEmit(state, FxParticles.END_ROD, f.x, f.y + Math.random() * 40, f.z, 1, 0.08, 0.3, 0.08, 0.02)
        }
        if (tick % 80 == 0 && state.towers.length > 0) {
            let tower = state.towers[Math.floor(Math.random() * state.towers.length)]
            fxLightning(state.level, tower.crystal)
        }
    }

    if (p >= 0.95) {
        fxEmit(state, FxParticles.REVERSE_PORTAL, f.x, f.y, f.z, 25, 1.5, 1.5, 1.5, 0.6)
        if (tick % 20 == 0) fxEmit(state, FxParticles.FLASH, f.x, f.y, f.z, 1, 0, 0, 0, 0)
    }

    if (tick % 80 == 0) fxSound(server, state.level, f, 'minecraft:block.beacon.ambient', 4, 0.5 + p)
    if (p >= 0.5 && tick % 100 == 0) fxSound(server, state.level, f, 'minecraft:block.respawn_anchor.charge', 3, 0.6 + p * 0.6)
    if (p >= 0.75 && tick % 120 == 0) fxSound(server, state.level, f, 'minecraft:entity.warden.sonic_charge', 3, 0.8)
}

const FX_LAST_STATUS = {}

const fxLogStatus = (key, entity, controller, progress) => {
    let status = `${entity.isFormed() ? 'formado' : 'nao formado'} / ${entity.getStatus()}`
    if (FX_LAST_STATUS[key] == status) return
    FX_LAST_STATUS[key] = status
    console.info(`[Absolute Reactor FX] Reator em ${controller.x} ${controller.y} ${controller.z}: ${status}, progresso ${Math.round(progress * 100)}%`)
}

const FX_KNOWN = {}

const fxRemember = (level, controller) => {
    let key = fxKey(level, controller)
    if (FX_KNOWN[key] == null) FX_KNOWN[key] = { level: level, pos: controller }
    return key
}

const fxDiscover = server => {
    server.players.forEach(player => {
        let level = player.level
        fxFindReactors(level, player.blockPosition(), (entity, controller) => fxRemember(level, controller))
    })
}

const fxHasViewer = (level, pos) => {
    let found = false
    fxPlayersOf(level).forEach(player => {
        if (!found && player.distanceToSqr(pos.x + 0.5, pos.y + 0.5, pos.z + 0.5) <= FX_VIEW_RANGE * FX_VIEW_RANGE) found = true
    })
    return found
}

const fxReactorAt = (level, pos) => {
    try {
        if (!level.isLoaded(pos)) return null
        let entity = level.getBlockEntity(pos)
        if (entity == null || typeof entity.getFoundMachine != 'function') return null
        if (String(entity.getId()) != FX_REACTOR_ID) return null
        return entity
    } catch (erro) {
        return null
    }
}

const fxScan = (server, tick) => {
    if (tick % FX_DISCOVER_TICKS == 0) fxDiscover(server)
    Object.keys(FX_KNOWN).forEach(key => {
        let known = FX_KNOWN[key]
        let level = known.level
        let controller = known.pos
        let state = FX_ACTIVE[key]
        let entity = fxReactorAt(level, controller)
        if (entity == null || !fxHasViewer(level, controller)) {
            if (entity == null) delete FX_KNOWN[key]
            if (state != null && !state.test) fxStop(server, state, false)
            return
        }
        if (state != null && state.test) return
        try {
            let running = entity.isFormed() && entity.getStatus().isCrafting()
            let progress = running ? fxProgress(entity) : 0
            fxLogStatus(key, entity, controller, progress)
            if (running) {
                if (state == null) {
                    state = fxBuild(server, level, entity, controller)
                    if (state == null) {
                        console.warn(`[Absolute Reactor FX] Nenhuma Laser Focus Matrix encontrada na estrutura em ${controller.x} ${controller.y} ${controller.z}`)
                        return
                    }
                    FX_ACTIVE[key] = state
                    fxStart(server, state)
                } else if (state.progress >= FX_FINISHED && progress < 0.1) {
                    fxKillCrystals(server, state)
                    fxFinale(server, state)
                    fxStart(server, state)
                }
                state.progress = progress
            } else if (state != null) {
                fxStop(server, state, state.progress >= FX_FINISHED)
            } else if (tick % 200 == 0) {
                fxKillCrystals(server, { level: level, tag: fxTag(controller), controller: { x: controller.x, y: controller.y, z: controller.z } })
            }
        } catch (erro) {
            console.error(`[Absolute Reactor FX] Erro no reator em ${controller.x} ${controller.y} ${controller.z}: ${erro}`)
        }
    })
}

const fxTestTick = (server, state, tick) => {
    state.progress = Math.min(1, (tick - state.test.start) / state.test.duration)
    if (state.progress >= 1) fxStop(server, state, true)
}

const fxStartTest = (server, player, seconds) => {
    let level = player.level
    let found = 0
    fxFindReactors(level, player.blockPosition(), (entity, controller) => {
        if (!entity.isFormed()) return
        let key = fxRemember(level, controller)
        if (FX_ACTIVE[key] != null) fxStop(server, FX_ACTIVE[key], false)
        let state = fxBuild(server, level, entity, controller)
        if (state == null) return
        state.test = { start: server.tickCount, duration: seconds * 20 }
        FX_ACTIVE[key] = state
        fxStart(server, state)
        found++
    })
    return found
}

ServerEvents.tick(sujjslegacy => {
    let server = sujjslegacy.server
    let tick = server.tickCount
    try {
        if (tick % FX_SCAN_TICKS == 0) fxScan(server, tick)
        Object.keys(FX_ACTIVE).forEach(key => {
            let state = FX_ACTIVE[key]
            if (state != null && state.test) fxTestTick(server, state, tick)
        })
        if (tick % FX_FRAME_TICKS == 0) {
            Object.keys(FX_ACTIVE).forEach(key => {
                if (FX_ACTIVE[key] != null) fxFrame(server, FX_ACTIVE[key], tick)
            })
        }
    } catch (erro) {
        console.error(`[Absolute Reactor FX] ${erro}`)
    }
})

ServerEvents.commandRegistry(sujjslegacy => {
    const Commands = sujjslegacy.commands
    const runTest = (context, seconds) => {
        let player = context.source.player
        if (player == null) return 0
        let found = fxStartTest(context.source.server, player, seconds)
        if (found == 0) player.tell('Nenhum Absolute Reactor formado por perto.')
        else player.tell(`Teste da animação ligado por ${seconds} segundos.`)
        return 1
    }
    sujjslegacy.register(Commands.literal('reactorfx')
        .requires(source => source.hasPermission(2))
        .then(Commands.literal('test')
            .executes(context => runTest(context, 60)))
        .then(Commands.literal('full')
            .executes(context => runTest(context, 300)))
        .then(Commands.literal('stop')
            .executes(context => {
                Object.keys(FX_ACTIVE).forEach(key => fxStop(context.source.server, FX_ACTIVE[key], false))
                return 1
            })))
})

// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.
