// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.

ServerEvents.recipes(sujjslegacy => {
    sujjslegacy.remove({ output: 'naturescompass:naturescompass' })
    sujjslegacy.shaped("naturescompass:naturescompass", [
        "IDI",
        "DCD",
        "IDI"
    ], {
        I: "minecraft:netherite_ingot",
        C: "minecraft:compass",
        D: "minecraft:diamond"
    }).id('kubejs:natures_compass')
})

// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.
