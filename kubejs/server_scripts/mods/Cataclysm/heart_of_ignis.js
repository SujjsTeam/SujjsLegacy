// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.

EntityEvents.spawned(sujjslegacy => {
    const entity = sujjslegacy.entity
    if (entity.type != 'cataclysm:ignis') return
    if (entity.persistentData.getBoolean('sujjslegacy_buffed')) return

    entity.getAttribute('minecraft:generic.max_health').baseValue = 1000
    entity.health = 1000
    entity.getAttribute('minecraft:generic.attack_damage').baseValue = 100
    entity.persistentData.putBoolean('sujjslegacy_buffed', true)
})

// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.
