// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.

ServerEvents.recipes(sujjslegacy => {
    sujjslegacy.custom({
        type: 'mekanism:reaction',
        item_input: { count: 8, item: 'sujjstweaks:universal_ammo' },
        fluid_input: { amount: 500, tag: 'c:heavy_water' },
        chemical_input: { amount: 250, chemical: 'mekanism:polonium' },
        item_output: { count: 8, id: 'sujjstweaks:radioactive_round' },
        chemical_output: { amount: 250, id: 'mekanism:spent_nuclear_waste' },
        duration: 600,
        energy_required: 50000
    }).id('kubejs:radioactive_round')
})

// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.
