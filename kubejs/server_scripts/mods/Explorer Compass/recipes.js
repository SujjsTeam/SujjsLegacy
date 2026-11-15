// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.

ServerEvents.recipes(sujjslegacy => {
    sujjslegacy.remove({ output: 'explorerscompass:explorerscompass' })
    sujjslegacy.shaped("explorerscompass:explorerscompass", [
        "IDI",
        "DCD",
        "IDI"
    ], {
        I: "minecraft:netherite_ingot",
        C: "minecraft:compass",
        D: "advanced_ae:shattered_singularity"
    }).id('kubejs:explorers_compass')
})

// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.
