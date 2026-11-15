// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.

ServerEvents.recipes(sujjslegacy => {
    const SG = 'silentgems:'
    const MI = 'modern_industrialization:'

    const ore = (id, chance) => ({ item: id, amount: 1, probability: chance })

    sujjslegacy.custom({
        type: MI + 'assembler',
        eu: 64,
        duration: 1200,
        item_inputs: [
            { item: MI + 'titanium_drill_head', amount: 1 },
            { item: MI + 'large_advanced_motor', amount: 2 },
            { item: MI + 'processing_unit', amount: 1 },
            { item: 'minecraft:diamond_block', amount: 2 },
            { item: 'minecraft:emerald_block', amount: 2 },
            { item: 'minecraft:amethyst_block', amount: 4 },
            { item: 'sujjsores:ruby_block', amount: 1 },
            { item: 'sujjsores:sapphire_block', amount: 1 }
        ],
        fluid_inputs: [{ fluid: MI + 'lubricant', amount: 1000 }],
        item_outputs: [{ item: 'kubejs:gem_drill', amount: 2 }]
    }).id('kubejs:silentgems/gem_drill')

    sujjslegacy.custom({
        type: MI + 'assembler',
        eu: 64,
        duration: 2400,
        item_inputs: [
            { item: MI + 'titanium_drill_head', amount: 2 },
            { item: MI + 'large_advanced_motor', amount: 2 },
            { item: MI + 'processing_unit', amount: 2 },
            { item: 'minecraft:netherite_ingot', amount: 2 },
            { item: 'minecraft:nether_star', amount: 1 },
            { item: SG + 'garnet_block', amount: 1 },
            { item: SG + 'aquamarine_block', amount: 1 },
            { item: 'kubejs:gem_drill', amount: 1 }
        ],
        fluid_inputs: [{ fluid: MI + 'lubricant', amount: 2000 }],
        item_outputs: [{ item: 'kubejs:chaos_drill', amount: 1 }]
    }).id('kubejs:silentgems/chaos_drill')

    const GEM_DRILL = [
        'ammolite', 'aquamarine', 'carnelian', 'citrine', 'garnet', 'heliodor',
        'iolite', 'pearl', 'peridot', 'rose_quartz', 'topaz', 'turquoise'
    ]

    sujjslegacy.custom({
        type: MI + 'quarry',
        eu: 128,
        duration: 600,
        item_inputs: { item: 'kubejs:gem_drill', amount: 1, probability: 0.04 },
        item_outputs: GEM_DRILL.map(gem => ore(SG + gem + '_ore', 0.07))
    }).id('kubejs:silentgems/quarry_gem_drill')

    const CHAOS_GEMS = ['alexandrite', 'kyanite', 'moldavite', 'opal', 'tanzanite']

    let chaos = CHAOS_GEMS.map(gem => ore(SG + gem + '_ore', 0.05))
    chaos.push(ore(SG + 'black_diamond_ore', 0.025))
    chaos.push(ore(SG + 'white_diamond_ore', 0.025))
    chaos.push(ore(SG + 'chaos_ore', 0.03))
    chaos.push(ore('silentgear:crimson_iron_ore', 0.06))
    chaos.push(ore('silentgear:bort_ore', 0.04))
    chaos.push(ore('silentgear:azure_silver_ore', 0.03))

    sujjslegacy.custom({
        type: MI + 'quarry',
        eu: 256,
        duration: 600,
        item_inputs: { item: 'kubejs:chaos_drill', amount: 1, probability: 0.04 },
        item_outputs: chaos
    }).id('kubejs:silentgems/quarry_chaos_drill')
})

// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.
