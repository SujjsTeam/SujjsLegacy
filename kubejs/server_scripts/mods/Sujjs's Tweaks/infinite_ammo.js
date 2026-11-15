// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.

ServerEvents.recipes(sujjslegacy => {
    sujjslegacy.custom({
        type: 'mekanism:nucleosynthesizing',
        item_input: { count: 64, item: 'sujjstweaks:universal_ammo' },
        chemical_input: { amount: 1000, chemical: 'mekanism:antimatter' },
        output: { count: 1, id: 'sujjstweaks:infinite_ammo' },
        duration: 6000,
        per_tick_usage: false
    }).id('kubejs:infinite_ammo')
})

// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.
