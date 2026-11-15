// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.

ServerEvents.recipes(sujjslegacy => {

    sujjslegacy.custom({
        type: 'ae2:inscriber',
        mode: 'press',
        ingredients: {
            middle: { item: 'ae2:silicon' },
            top: { item: 'kubejs:inscriber_quantum_press' }
        },
        result: {
            id: 'ae2:printed_silicon'
        }
    }).id('kubejs:inscriber_quantum_press/silicon')


    sujjslegacy.custom({
        type: 'ae2:inscriber',
        mode: 'press',
        ingredients: {
            middle: { item: 'minecraft:gold_ingot' },
            top: { item: 'kubejs:inscriber_quantum_press' }
        },
        result: {
            id: 'ae2:printed_logic_processor'
        }
    }).id('kubejs:inscriber_quantum_press/logic')


    sujjslegacy.custom({
        type: 'ae2:inscriber',
        mode: 'press',
        ingredients: {
            middle: { item: 'ae2:certus_quartz_crystal' },
            top: { item: 'kubejs:inscriber_quantum_press' }
        },
        result: {
            id: 'ae2:printed_calculation_processor'
        }
    }).id('kubejs:inscriber_quantum_press/calculation')


    sujjslegacy.custom({
        type: 'ae2:inscriber',
        mode: 'press',
        ingredients: {
            middle: { item: 'minecraft:diamond' },
            top: { item: 'kubejs:inscriber_quantum_press' }
        },
        result: {
            id: 'ae2:printed_engineering_processor'
        }
    }).id('kubejs:inscriber_quantum_press/engineering')


    sujjslegacy.custom({
        type: 'ae2:inscriber',
        mode: 'press',
        ingredients: {
            middle: { item: 'appflux:charged_redstone' },
            top: { item: 'kubejs:inscriber_quantum_press' }
        },
        result: {
            id: 'appflux:printed_energy_processor'
        }
    }).id('kubejs:inscriber_quantum_press/appflux_energy_processor')


    sujjslegacy.custom({
        type: 'ae2:inscriber',
        mode: 'press',
        ingredients: {
            middle: { item: 'advanced_ae:quantum_alloy' },
            top: { item: 'kubejs:inscriber_quantum_press' }
        },
        result: {
            id: 'advanced_ae:printed_quantum_processor'
        }
    }).id('kubejs:inscriber_quantum_press/advanced_ae_quantum_processor')


    sujjslegacy.custom({
        type: 'ae2:inscriber',
        mode: 'inscribe',
        ingredients: {
            middle: { item: 'extendedae:entro_crystal' },
            top: { item: 'kubejs:inscriber_quantum_press' }
        },
        result: {
            id: 'extendedae:concurrent_processor_print'
        }
    }).id('kubejs:inscriber_quantum_press/concurrent_processor')


    sujjslegacy.custom({
        type: 'ae2:inscriber',
        mode: 'inscribe',
        ingredients: {
            middle: { item: 'megacells:sky_steel_ingot' },
            top: { item: 'kubejs:inscriber_quantum_press' }
        },
        result: {
            id: 'megacells:printed_accumulation_processor'
        }
    }).id('kubejs:inscriber_quantum_press/accumulation_processor')


    sujjslegacy.custom({
        type: 'ae2:inscriber',
        mode: 'inscribe',
        ingredients: {
            middle: { item: 'minecraft:iron_block' },
            top: { item: 'kubejs:inscriber_quantum_press' }
        },
        result: {
            id: 'kubejs:inscriber_quantum_press'
        }
    }).id('kubejs:inscriber_quantum_press/duplicate')

})

// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.
