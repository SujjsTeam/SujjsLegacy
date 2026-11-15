// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.

ServerEvents.recipes(sujjslegacy => {
    sujjslegacy.remove({ output: 'oritech:enchantment_catalyst_block' })

    const OR = 'oritech:'

    sujjslegacy.custom({
        type: 'ars_nouveau:enchanting_apparatus',
        keepNbtOfReagent: false,
        reagent: { item: 'minecraft:enchanting_table' },
        pedestalItems: [
            { item: OR + 'super_ai_chip' },
            { item: OR + 'overcharged_crystal' },
            { item: OR + 'prometheum_ingot' },
            { item: OR + 'adamant_block' },
            { item: OR + 'unholy_intelligence' },
            { item: OR + 'overcharged_crystal' },
            { item: OR + 'prometheum_ingot' },
            { item: OR + 'adamant_block' }
        ],
        result: { id: OR + 'enchantment_catalyst_block', count: 1 },
        sourceCost: 10000
    }).id('kubejs:oritech/arcane_catalyst')
})

// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.
