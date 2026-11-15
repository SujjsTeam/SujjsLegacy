// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.

ServerEvents.recipes((sujjslegacy) => {

    sujjslegacy.custom({
        type: "modern_industrialization:assembler",

        eu: 1000000,
        duration: 200,

        item_inputs: [
            {
                item: "minecraft:netherite_sword",
                amount: 1
            },
            {
                item: "modern_industrialization:quantum_upgrade",
                amount: 1
            }
        ],

        fluid_inputs: [
            {
                fluid: "kubejs:nucleon",
                amount: 16000
            },
            {
                fluid: "modern_industrialization:uu_matter",
                amount: 16000
            }
        ],

        item_outputs: [
            {
                item: "kubejs:broken_quantum_sword",
                amount: 1
            }
        ]
    }).id("kubejs:assembler/broken_quantum_sword")



    sujjslegacy.recipes.modern_industrialization.blast_furnace(128, 200)
        .itemIn("minecraft:netherite_chestplate")
        .itemIn("modern_industrialization:quantum_upgrade")
        .fluidIn("kubejs:nucleon", 1024000)
        .itemOut("kubejs:broken_quantum_chestplate")
        .id("kubejs:broken_quantum_chestplate")


    sujjslegacy.recipes.modern_industrialization.blast_furnace(128, 200)
        .itemIn("minecraft:netherite_boots")
        .itemIn("modern_industrialization:quantum_upgrade")
        .fluidIn("kubejs:nucleon", 1024000)
        .itemOut("kubejs:broken_quantum_boots")
        .id("kubejs:broken_quantum_boots")


    sujjslegacy.recipes.modern_industrialization.blast_furnace(128, 200)
        .itemIn("minecraft:netherite_helmet")
        .itemIn("modern_industrialization:quantum_upgrade")
        .fluidIn("kubejs:nucleon", 1024000)
        .itemOut("kubejs:broken_quantum_helmet")
        .id("kubejs:broken_quantum_helmet")


    sujjslegacy.recipes.modern_industrialization.blast_furnace(128, 200)
        .itemIn("minecraft:netherite_leggings")
        .itemIn("modern_industrialization:quantum_upgrade")
        .fluidIn("kubejs:nucleon", 1024000)
        .itemOut("kubejs:broken_quantum_leggings")
        .id("kubejs:broken_quantum_leggings")


})

// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.
