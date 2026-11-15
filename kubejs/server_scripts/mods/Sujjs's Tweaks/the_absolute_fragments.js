// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.

ServerEvents.recipes(sujjslegacy => {
    sujjslegacy.custom({
        type: 'modern_industrialization:implosion_compressor',
        eu: 128,
        duration: 1200,
        item_inputs: [
            { item: 'sujjstweaks:absolute_fragment', amount: 46 },
            { item: 'modern_industrialization:industrial_tnt', amount: 4 },
            { item: 'sujjstweaks:radioactive_flask', amount: 1 },
            { item: 'draconicevolution:awakened_core', amount: 1 },
            { item: 'sujjsores:iridium_block', amount: 1 }
        ],
        item_outputs: [
            { item: 'sujjstweaks:the_absolute', amount: 1 }
        ]
    }).id('kubejs:the_absolute_from_fragments')
})

// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.
