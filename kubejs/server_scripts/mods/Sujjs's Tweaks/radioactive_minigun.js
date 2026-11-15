// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.

ServerEvents.recipes(sujjslegacy => {
    sujjslegacy.custom({
        type: 'scguns:gun_bench',
        result: { id: 'sujjstweaks:radioactive_minigun', count: 1 },
        ingredients: {
            blueprint: { item: 'scguns:scorched_blueprint' },
            gun_internal_1: { item: 'scguns:energy_core' },
            gun_internal_2: { item: 'scguns:heavy_gun_parts' },
            gun_top_internal_1: { item: 'mekanism:ultimate_control_circuit' },
            gun_top_internal_2: { item: 'scguns:scorched_gun_frame' },
            gun_barrel_1: { item: 'scguns:heavy_gun_barrel' },
            gun_barrel_2: { item: 'scguns:heavy_gun_barrel' },
            gun_top_barrel_1: { item: 'sujjstweaks:radioactive_flask' },
            gun_top_barrel_2: { item: 'mekanism:pellet_polonium' },
            gun_grip: { item: 'mekanism:alloy_atomic' },
            gun_magazine: { item: 'sujjsores:uranium_block' }
        }
    }).id('kubejs:radioactive_minigun')
})

// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.
