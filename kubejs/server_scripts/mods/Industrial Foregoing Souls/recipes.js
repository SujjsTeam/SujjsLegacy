// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.

ServerEvents.recipes(sujjslegacy => {

    sujjslegacy.remove({
        output: 'industrialforegoingsouls:soul_surge'
    })

    sujjslegacy.custom({
        type: 'industrialforegoing:dissolution_chamber',

        input: [
            { item: 'minecraft:echo_shard' },
            { item: 'minecraft:echo_shard' },
            { item: 'minecraft:echo_shard' },

            { item: 'modern_industrialization:turbo_upgrade' },
            { item: 'modern_industrialization:turbo_upgrade' },

            { item: 'industrialforegoing:plastic' },
            { item: 'industrialforegoing:plastic' },
            { item: 'industrialforegoing:plastic' }
        ],

        inputFluid: {
            amount: 5000,
            fluid: 'justdirethings:time_fluid_source'
        },

        output: {
            count: 1,
            id: 'industrialforegoingsouls:soul_surge'
        },

        processingTime: 400
    }).id('kubejs:soul_surge')

})

// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.
