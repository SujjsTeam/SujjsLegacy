// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.

ServerEvents.recipes(sujjslegacy => {
    const absolutos = []
    for (let i = 0; i < 9; i++) {
        absolutos.push({ item: 'sujjstweaks:the_absolute' })
    }

    sujjslegacy.custom({
        type: 'create:compacting',
        ingredients: absolutos,
        results: [
            { id: 'sujjstweaks:the_absolute_block', count: 1 }
        ],
        heat_requirement: 'superheated'
    }).id('kubejs:the_absolute_block')
})

// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.
