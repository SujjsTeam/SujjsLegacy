// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.

ServerEvents.recipes(sujjslegacy => {

    sujjslegacy.remove({
        id: "modern_industrialization:upgrade/packer/quantum/sword"
    })

    sujjslegacy.custom({
        type: "modern_industrialization:packer",

        eu: 1000000,
        duration: 200,

        item_inputs: [
            {
                item: "kubejs:broken_quantum_sword",
                amount: 1
            },
            {
                item: "modern_industrialization:quantum_upgrade",
                amount: 1
            }
        ],

        item_outputs: [
            {
                item: "modern_industrialization:quantum_sword",
                amount: 1
            }
        ]
    }).id("kubejs:electric_packer/broken_quantum_sword")


    sujjslegacy.remove({
        id: "modern_industrialization:upgrade/packer/quantum/chestplate"
    })

    sujjslegacy.custom({
        type: "modern_industrialization:packer",

        eu: 1000000,
        duration: 200,

        item_inputs: [
            {
                item: "kubejs:broken_quantum_chestplate",
                amount: 1
            },
            {
                item: "modern_industrialization:quantum_upgrade",
                amount: 1
            }
        ],

        item_outputs: [
            {
                item: "modern_industrialization:quantum_chestplate",
                amount: 1
            }
        ]
    }).id("kubejs:electric_packer/broken_quantum_chestplate")

    sujjslegacy.remove({
        id: "modern_industrialization:upgrade/packer/quantum/helmet"
    })

    sujjslegacy.custom({
        type: "modern_industrialization:packer",

        eu: 1000000,
        duration: 200,

        item_inputs: [
            {
                item: "kubejs:broken_quantum_helmet",
                amount: 1
            },
            {
                item: "modern_industrialization:quantum_upgrade",
                amount: 1
            }
        ],

        item_outputs: [
            {
                item: "modern_industrialization:quantum_helmet",
                amount: 1
            }
        ]
    }).id("kubejs:electric_packer/broken_quantum_helmet")


sujjslegacy.remove({
        id: "modern_industrialization:upgrade/packer/quantum/leggings"
    })

    sujjslegacy.custom({
        type: "modern_industrialization:packer",

        eu: 1000000,
        duration: 200,

        item_inputs: [
            {
                item: "kubejs:broken_quantum_leggings",
                amount: 1
            },
            {
                item: "modern_industrialization:quantum_upgrade",
                amount: 1
            }
        ],

        item_outputs: [
            {
                item: "modern_industrialization:quantum_leggings",
                amount: 1
            }
        ]
    }).id("kubejs:electric_packer/broken_quantum_leggings")

    sujjslegacy.remove({
        id: "modern_industrialization:upgrade/packer/quantum/boots"
    })

    sujjslegacy.custom({
        type: "modern_industrialization:packer",

        eu: 1000000,
        duration: 200,

        item_inputs: [
            {
                item: "kubejs:broken_quantum_boots",
                amount: 1
            },
            {
                item: "modern_industrialization:quantum_upgrade",
                amount: 1
            }
        ],

        item_outputs: [
            {
                item: "modern_industrialization:quantum_boots",
                amount: 1
            }
        ]
    }).id("kubejs:electric_packer/broken_quantum_boots")


    sujjslegacy.remove({
        id: "modern_industrialization:electric_age/upgrades/quantum"
    })

    sujjslegacy.custom({
        type: "modern_industrialization:assembler",

        eu: 32,
        duration: 1200,

        item_inputs: [
            {
                item: "modern_industrialization:highly_advanced_upgrade",
                amount: 32
            },
            {
                item: "modern_industrialization:quantum_circuit",
                amount: 8
            },
            {
                item: "modern_industrialization:singularity",
                amount: 1
            },
            {
                item: "modern_industrialization:quantum_circuit_board",
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
                amount: 50
            }
        ],

        item_outputs: [
            {
                item: "modern_industrialization:quantum_upgrade",
                amount: 1
            }
        ]
    }).id("kubejs:assembler/quantum_upgrade")

})

// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.
