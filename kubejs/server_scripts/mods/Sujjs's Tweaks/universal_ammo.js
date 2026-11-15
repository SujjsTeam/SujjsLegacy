// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.

ServerEvents.recipes(sujjslegacy => {
    sujjslegacy.custom({
        type: 'modern_industrialization:assembler',
        eu: 512,
        duration: 600,
        item_inputs: [
            { item: 'scguns:medium_diamond_steel_casing', amount: 8 },
            { item: 'sujjsores:iridium_nugget', amount: 8 },
            { item: 'scguns:nitro_powder_dust', amount: 8 },
            { item: 'scguns:plasma_core', amount: 1 },
            { item: 'mekanism:alloy_atomic', amount: 2 },
            { item: 'mekanism:pellet_polonium', amount: 1 },
            { item: 'mekanism:ultimate_control_circuit', amount: 1 }
        ],
        fluid_inputs: [
            { fluid: 'modern_industrialization:cryofluid', amount: 250 },
            { fluid: 'modern_industrialization:tritium', amount: 50 }
        ],
        item_outputs: [
            { item: 'sujjstweaks:universal_ammo', amount: 16 }
        ]
    }).id('kubejs:universal_ammo')
})

// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.
