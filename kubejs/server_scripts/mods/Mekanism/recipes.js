// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.

ServerEvents.recipes(sujjslegacy => {
    sujjslegacy.remove({ output: 'mekanism:mekasuit_helmet' })


    sujjslegacy.shaped('mekanism:mekasuit_helmet', [
        'HUH',
        'HQH',
        'PIP'
    ], {
        H: 'mekanism:hdpe_sheet',
        U: 'mekanism:ultimate_control_circuit',
        Q: 'kubejs:broken_quantum_helmet',
        P: 'mekanism:pellet_polonium',
        I: 'mekanism:ultimate_induction_cell'
    }).id('kubejs:mekanism/mekasuit_helmet')


    sujjslegacy.remove({ output: 'mekanism:mekasuit_bodyarmor' })


    sujjslegacy.shaped('mekanism:mekasuit_bodyarmor', [
        'HUH',
        'HQH',
        'PIP'
    ], {
        H: 'mekanism:hdpe_sheet',
        U: 'mekanism:ultimate_control_circuit',
        Q: 'kubejs:broken_quantum_chestplate',
        P: 'mekanism:pellet_polonium',
        I: 'mekanism:ultimate_induction_cell'
    }).id('kubejs:mekanism/mekasuit_bodyarmor')


    sujjslegacy.remove({ output: 'mekanism:mekasuit_pants' })


    sujjslegacy.shaped('mekanism:mekasuit_pants', [
        'HUH',
        'HQH',
        'PIP'
    ], {
        H: 'mekanism:hdpe_sheet',
        U: 'mekanism:ultimate_control_circuit',
        Q: 'kubejs:broken_quantum_leggings',
        P: 'mekanism:pellet_polonium',
        I: 'mekanism:ultimate_induction_cell'
    }).id('kubejs:mekanism/mekasuit_pants')


    sujjslegacy.remove({ output: 'mekanism:mekasuit_boots' })


    sujjslegacy.shaped('mekanism:mekasuit_boots', [
        'HUH',
        'HQH',
        'PIP'
    ], {
        H: 'mekanism:hdpe_sheet',
        U: 'mekanism:ultimate_control_circuit',
        Q: 'kubejs:broken_quantum_boots',
        P: 'mekanism:pellet_polonium',
        I: 'mekanism:ultimate_induction_cell'
    }).id('kubejs:mekanism/mekasuit_boots')

})

// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.
