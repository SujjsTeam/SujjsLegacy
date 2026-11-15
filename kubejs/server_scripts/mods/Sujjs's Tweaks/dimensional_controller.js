// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.

ServerEvents.recipes(sujjslegacy => {
    const injetores = [
        'ae2:quantum_entangled_singularity',
        'ae2:quantum_entangled_singularity',
        'draconicevolution:advanced_dislocator',
        'mekanism:dimensional_stabilizer',
        'mekanism:teleportation_core',
        'mekanism:teleportation_core',
        'modern_industrialization:quantum_circuit',
        'modern_industrialization:quantum_circuit',
        'mekanism:pellet_polonium',
        'mekanism:pellet_polonium',
        'sujjsores:iridium_plate',
        'sujjsores:iridium_plate',
        'advanced_ae:quantum_alloy_plate',
        'advanced_ae:quantum_alloy_plate'
    ]

    sujjslegacy.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'mekanism:portable_teleporter' },
        ingredients: injetores.map(item => ({ consume: true, ingredient: { item: item } })),
        result: { count: 1, id: 'sujjstweaks:dimensional_controller' },
        techLevel: 'chaotic',
        totalEnergy: 100000000
    }).id('kubejs:dimensional_controller')
})

// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.
