// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.

ServerEvents.recipes(sujjslegacy => {

    sujjslegacy.custom({
        type: 'extendedae:crystal_assembler',

        input_items: [
            {
                ingredient: {
                    item: 'ae2:silicon_press'
                }
            },
            {
                ingredient: {
                    item: 'ae2:logic_processor_press'
                }
            },
            {
                ingredient: {
                    item: 'ae2:calculation_processor_press'
                }
            },
            {
                ingredient: {
                    item: 'ae2:engineering_processor_press'
                }
            },
            {
                ingredient: {
                    item: 'advanced_ae:quantum_alloy_plate'
                }
            }
        ],

        input_fluid: {
            amount: 1000,
            ingredient: {
                fluid: 'advanced_ae:quantum_infusion_source'
            }
        },

        output: {
            id: 'kubejs:inscriber_quantum_press',
            count: 1
        }
    }).id('kubejs:inscriber_quantum_press/crafting')

})

// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.
