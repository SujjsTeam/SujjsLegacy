// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.

ServerEvents.recipes(sujjslegacy => {
    const MMR = 'modular_machinery_reborn:'
    const ARS = 'modular_machinery_reborn_ars:'
    const SS = 'sophisticatedstorage:'
    const MEK = 'mekanism:'

    sujjslegacy.remove({ mod: 'modular_machinery_reborn' })
    sujjslegacy.remove({ output: [
        'modular_machinery_reborn:biome_reader',
        'modular_machinery_reborn:casing_circuitry',
        'modular_machinery_reborn:casing_firebox',
        'modular_machinery_reborn:casing_gearbox',
        'modular_machinery_reborn:casing_vent',
        'modular_machinery_reborn:chunkloader',
        'modular_machinery_reborn:command_executioner',
        'modular_machinery_reborn:dimensional_detector',
        'modular_machinery_reborn:durabilityhatch_big',
        'modular_machinery_reborn:durabilityhatch_normal',
        'modular_machinery_reborn:durabilityhatch_small',
        'modular_machinery_reborn:durabilityhatch_tiny',
        'modular_machinery_reborn:effect_dispenser_big',
        'modular_machinery_reborn:effect_dispenser_medium',
        'modular_machinery_reborn:effect_dispenser_small',
        'modular_machinery_reborn:energyoutputhatch_big',
        'modular_machinery_reborn:energyoutputhatch_huge',
        'modular_machinery_reborn:energyoutputhatch_ludicrous',
        'modular_machinery_reborn:energyoutputhatch_normal',
        'modular_machinery_reborn:energyoutputhatch_reinforced',
        'modular_machinery_reborn:energyoutputhatch_small',
        'modular_machinery_reborn:energyoutputhatch_tiny',
        'modular_machinery_reborn:energyoutputhatch_ultimate',
        'modular_machinery_reborn:entity_damager',
        'modular_machinery_reborn:entity_detector',
        'modular_machinery_reborn:entity_healer',
        'modular_machinery_reborn:entity_killer',
        'modular_machinery_reborn:entity_spawner',
        'modular_machinery_reborn:experienceinputhatch_big',
        'modular_machinery_reborn:experienceinputhatch_huge',
        'modular_machinery_reborn:experienceinputhatch_ludicrous',
        'modular_machinery_reborn:experienceinputhatch_normal',
        'modular_machinery_reborn:experienceinputhatch_reinforced',
        'modular_machinery_reborn:experienceinputhatch_small',
        'modular_machinery_reborn:experienceinputhatch_tiny',
        'modular_machinery_reborn:experienceinputhatch_vacuum',
        'modular_machinery_reborn:experienceoutputhatch_big',
        'modular_machinery_reborn:experienceoutputhatch_huge',
        'modular_machinery_reborn:experienceoutputhatch_ludicrous',
        'modular_machinery_reborn:experienceoutputhatch_normal',
        'modular_machinery_reborn:experienceoutputhatch_reinforced',
        'modular_machinery_reborn:experienceoutputhatch_small',
        'modular_machinery_reborn:experienceoutputhatch_tiny',
        'modular_machinery_reborn:experienceoutputhatch_vacuum',
        'modular_machinery_reborn:fluidoutputhatch_big',
        'modular_machinery_reborn:fluidoutputhatch_huge',
        'modular_machinery_reborn:fluidoutputhatch_ludicrous',
        'modular_machinery_reborn:fluidoutputhatch_normal',
        'modular_machinery_reborn:fluidoutputhatch_reinforced',
        'modular_machinery_reborn:fluidoutputhatch_small',
        'modular_machinery_reborn:fluidoutputhatch_tiny',
        'modular_machinery_reborn:fluidoutputhatch_vacuum',
        'modular_machinery_reborn:fuel_tank_big',
        'modular_machinery_reborn:fuel_tank_huge',
        'modular_machinery_reborn:fuel_tank_normal',
        'modular_machinery_reborn:fuel_tank_reinforced',
        'modular_machinery_reborn:fuel_tank_small',
        'modular_machinery_reborn:fuel_tank_tiny',
        'modular_machinery_reborn:height_meter',
        'modular_machinery_reborn:parallel_hatch_advanced',
        'modular_machinery_reborn:parallel_hatch_basic',
        'modular_machinery_reborn:parallel_hatch_max',
        'modular_machinery_reborn:parallel_hatch_medium',
        'modular_machinery_reborn:parallel_hatch_ultimate',
        'modular_machinery_reborn:redstone_port',
        'modular_machinery_reborn:structure_checker',
        'modular_machinery_reborn:structure_creator_box',
        'modular_machinery_reborn:structure_creator_single',
        'modular_machinery_reborn:structure_creator_vein',
        'modular_machinery_reborn:structure_template_item',
        'modular_machinery_reborn:time_counter',
        'modular_machinery_reborn:weather_sensor',
        'modular_machinery_reborn:wrench',
        'modular_machinery_reborn_ars:sourceoutputhatch_big',
        'modular_machinery_reborn_ars:sourceoutputhatch_huge',
        'modular_machinery_reborn_ars:sourceoutputhatch_ludicrous',
        'modular_machinery_reborn_ars:sourceoutputhatch_normal',
        'modular_machinery_reborn_ars:sourceoutputhatch_reinforced',
        'modular_machinery_reborn_ars:sourceoutputhatch_small',
        'modular_machinery_reborn_ars:sourceoutputhatch_tiny',
        'modular_machinery_reborn_ars:sourceoutputhatch_vacuum',
        'modular_machinery_reborn_mekanism:chemicalinputhatch_big',
        'modular_machinery_reborn_mekanism:chemicalinputhatch_huge',
        'modular_machinery_reborn_mekanism:chemicalinputhatch_ludicrous',
        'modular_machinery_reborn_mekanism:chemicalinputhatch_normal',
        'modular_machinery_reborn_mekanism:chemicalinputhatch_reinforced',
        'modular_machinery_reborn_mekanism:chemicalinputhatch_small',
        'modular_machinery_reborn_mekanism:chemicalinputhatch_tiny',
        'modular_machinery_reborn_mekanism:chemicalinputhatch_vacuum',
        'modular_machinery_reborn_mekanism:chemicaloutputhatch_big',
        'modular_machinery_reborn_mekanism:chemicaloutputhatch_huge',
        'modular_machinery_reborn_mekanism:chemicaloutputhatch_ludicrous',
        'modular_machinery_reborn_mekanism:chemicaloutputhatch_normal',
        'modular_machinery_reborn_mekanism:chemicaloutputhatch_reinforced',
        'modular_machinery_reborn_mekanism:chemicaloutputhatch_small',
        'modular_machinery_reborn_mekanism:chemicaloutputhatch_tiny',
        'modular_machinery_reborn_mekanism:chemicaloutputhatch_vacuum',
        'modular_machinery_reborn_mekanism:geiger_meter',
        'modular_machinery_reborn_mekanism:heat_input_vent',
        'modular_machinery_reborn_mekanism:heat_output_vent'
    ] })

    const UPGRADE = {
        item: {
            tiny: 'minecraft:chest',
            small: SS + 'chest',
            normal: SS + 'copper_chest',
            reinforced: SS + 'iron_chest',
            big: SS + 'gold_chest',
            huge: SS + 'diamond_chest',
            ludicrous: SS + 'netherite_chest'
        },
        fluid: {
            tiny: MEK + 'basic_fluid_tank',
            small: MEK + 'basic_fluid_tank',
            normal: MEK + 'advanced_fluid_tank',
            reinforced: MEK + 'advanced_fluid_tank',
            big: MEK + 'elite_fluid_tank',
            huge: MEK + 'elite_fluid_tank',
            ludicrous: MEK + 'ultimate_fluid_tank',
            vacuum: MEK + 'ultimate_fluid_tank'
        },
        energy: {
            tiny: MEK + 'basic_energy_cube',
            small: MEK + 'basic_energy_cube',
            normal: MEK + 'advanced_energy_cube',
            reinforced: MEK + 'advanced_energy_cube',
            big: MEK + 'elite_energy_cube',
            huge: MEK + 'elite_energy_cube',
            ludicrous: MEK + 'ultimate_energy_cube',
            ultimate: MEK + 'ultimate_energy_cube'
        },
        source: {
            tiny: 'ars_nouveau:source_jar',
            small: 'ars_nouveau:source_jar',
            normal: 'ars_nouveau:source_jar',
            reinforced: 'ars_nouveau:source_jar',
            big: 'ars_nouveau:source_jar',
            huge: 'ars_nouveau:source_jar',
            ludicrous: 'ars_nouveau:source_jar',
            vacuum: 'ars_nouveau:source_jar'
        }
    }

    const COMPONENTS = {
        item: {
            tiny: ['create:item_vault', 1],
            small: [SS + 'stack_upgrade_tier_1', 1],
            normal: [SS + 'stack_upgrade_tier_1_plus', 1],
            reinforced: [SS + 'stack_upgrade_tier_2', 1],
            big: [SS + 'stack_upgrade_tier_3', 2],
            huge: [SS + 'stack_upgrade_tier_4', 2],
            ludicrous: [SS + 'stack_upgrade_tier_5', 2]
        },
        fluid: {
            tiny: [MEK + 'basic_fluid_tank', 1],
            small: [MEK + 'basic_fluid_tank', 1],
            normal: [MEK + 'advanced_fluid_tank', 1],
            reinforced: [MEK + 'elite_fluid_tank', 1],
            big: [MEK + 'elite_fluid_tank', 2],
            huge: [MEK + 'ultimate_fluid_tank', 2],
            ludicrous: [MEK + 'ultimate_fluid_tank', 2],
            vacuum: [MEK + 'ultimate_fluid_tank', 2]
        },
        energy: {
            tiny: ['powah:energy_cell_basic', 1],
            small: ['powah:energy_cell_hardened', 1],
            normal: ['powah:energy_cell_blazing', 1],
            reinforced: ['powah:energy_cell_niotic', 1],
            big: ['powah:energy_cell_spirited', 2],
            huge: ['powah:energy_cell_nitro', 2],
            ludicrous: [MEK + 'ultimate_induction_cell', 2],
            ultimate: ['draconicevolution:draconic_energy_core', 2]
        },
        source: {
            tiny: ['ars_nouveau:source_gem_block', 1],
            small: ['ars_nouveau:relay', 1],
            normal: ['ars_nouveau:relay_splitter', 1],
            reinforced: ['ars_nouveau:relay_collector', 1],
            big: ['ars_nouveau:relay_warp', 2],
            huge: ['ars_nouveau:wilden_tribute', 2],
            ludicrous: ['ars_nouveau:wilden_tribute', 2],
            vacuum: ['ars_nouveau:archmage_spell_book', 2]
        }
    }

    const TOP_TIER = [
        ['draconicevolution:awakened_draconium_block', 4],
        ['draconicevolution:awakened_core', 2],
        ['draconicevolution:chaotic_core', 2],
        ['modern_industrialization:quantum_circuit', 2],
        [MMR + 'modularium', 2]
    ]

    const STEP = {
        normal: [
            [MEK + 'steel_casing', 4],
            [MEK + 'advanced_control_circuit', 2]
        ],
        reinforced: [
            [MEK + 'alloy_reinforced', 2],
            [MEK + 'elite_control_circuit', 2],
            ['mysticalagriculture:supremium_ingot', 2]
        ],
        big: [
            [MEK + 'alloy_atomic', 4],
            [MEK + 'ultimate_control_circuit', 2],
            ['modern_industrialization:advanced_machine_casing', 2],
            [MMR + 'modularium', 2]
        ],
        huge: [
            ['sujjsores:iridium_plate', 4],
            ['modern_industrialization:digital_circuit', 2],
            ['draconicevolution:wyvern_core', 2],
            [MMR + 'modularium', 2]
        ],
        ludicrous: [
            ['sujjsores:iridium_block', 4],
            ['modern_industrialization:processing_unit', 2],
            ['draconicevolution:awakened_draconium_ingot', 2],
            [MEK + 'pellet_antimatter', 2],
            [MMR + 'modularium', 2]
        ],
        vacuum: TOP_TIER,
        ultimate: TOP_TIER
    }

    const FUSION_TIERS = ['huge', 'ludicrous', 'vacuum', 'ultimate']

    const idOf = result => `kubejs:mmr/${result.split(':')[1]}`

    const one = id => ({ item: id })

    const expand = list => {
        let out = []
        list.forEach(entry => {
            for (let n = 0; n < entry[1]; n++) out.push(entry[0])
        })
        return out
    }

    const merge = list => {
        let out = []
        list.forEach(entry => {
            let found = out.filter(other => other[0] == entry[0])
            if (found.length > 0) found[0][1] += entry[1]
            else out.push([entry[0], entry[1]])
        })
        return out
    }

    const ring = (first, second, list) => {
        let half = expand(list.map(entry => [entry[0], entry[1] / 2]))
        return [first].concat(half).concat([second]).concat(half)
    }

    const tiny = (result, upgrade, comp, isOutput) => {
        sujjslegacy.custom({
            type: 'create:mechanical_crafting',
            accept_mirrored: false,
            category: 'misc',
            show_notification: false,
            pattern: isOutput ? ['MHM', 'KXK', 'SCS'] : ['SCS', 'KXK', 'MHM'],
            key: {
                S: one('sujjsores:steel_plate'),
                H: one('minecraft:hopper'),
                K: one('create:precision_mechanism'),
                M: one(MMR + 'casing_plain'),
                X: one(upgrade),
                C: one(comp[0])
            },
            result: { id: result, count: 1 }
        }).id(idOf(result))
    }

    const small = (result, previous, upgrade, comp) => {
        sujjslegacy.custom({
            type: 'industrialforegoing:dissolution_chamber',
            input: [
                MMR + 'casing_plain',
                MMR + 'modularium',
                MMR + 'casing_plain',
                upgrade,
                comp[0],
                'create:precision_mechanism',
                previous,
                'create:precision_mechanism'
            ].map(id => one(id)),
            inputFluid: { fluid: 'industrialforegoing:pink_slime', amount: 1000 },
            output: { id: result, count: 1 },
            processingTime: 400
        }).id(idOf(result))
    }

    const apparatus = (result, previous, upgrade, comp, tier) => {
        sujjslegacy.custom({
            type: 'ars_nouveau:enchanting_apparatus',
            keepNbtOfReagent: false,
            reagent: one(previous),
            pedestalItems: ring(upgrade, comp[0], STEP[tier]).map(id => one(id)),
            result: { id: result, count: 1 },
            sourceCost: 6000
        }).id(idOf(result))
    }

    const infusion = (result, previous, upgrade, comp, tier) => {
        sujjslegacy.custom({
            type: 'mysticalagriculture:infusion',
            input: one(previous),
            ingredients: ring(upgrade, comp[0], STEP[tier]).map(id => one(id)),
            result: { id: result, count: 1 }
        }).id(idOf(result))
    }

    const assembler = (result, previous, upgrade, comp, tier) => {
        sujjslegacy.custom({
            type: 'modern_industrialization:assembler',
            eu: 64,
            duration: 1200,
            item_inputs: merge([[previous, 1], [upgrade, 1], comp].concat(STEP[tier])).map(entry => ({ item: entry[0], amount: entry[1] })),
            fluid_inputs: [
                { fluid: 'modern_industrialization:soldering_alloy', amount: 1000 },
                { fluid: 'modern_industrialization:polyethylene', amount: 1000 }
            ],
            item_outputs: [{ item: result, amount: 1 }]
        }).id(idOf(result))
    }

    const fusion = (result, catalyst, list, techLevel, energy) => sujjslegacy.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: one(catalyst),
        ingredients: expand(list).map(id => ({ consume: true, ingredient: one(id) })),
        result: typeof result == 'string' ? { id: result, count: 1 } : result,
        techLevel: techLevel,
        totalEnergy: energy
    })

    const FUSION = {
        huge: ['wyvern', 20000000],
        ludicrous: ['draconic', 80000000],
        vacuum: ['chaotic', 300000000],
        ultimate: ['chaotic', 300000000]
    }

    const fused = (result, previous, upgrade, comp, tier) => {
        let list = [[upgrade, 2], comp].concat(STEP[tier])
        fusion(result, previous, list, FUSION[tier][0], FUSION[tier][1]).id(idOf(result))
    }

    const MACHINE = {
        normal: apparatus,
        reinforced: infusion,
        big: assembler,
        huge: fused,
        ludicrous: fused,
        vacuum: fused,
        ultimate: fused
    }

    const family = (prefix, name, sizes, kind, isOutput) => {
        let previous = null
        sizes.forEach(size => {
            let id = `${prefix}${name}_${size}`
            let upgrade = UPGRADE[kind][size]
            let comp = COMPONENTS[kind][size]
            if (size == 'tiny') tiny(id, upgrade, comp, isOutput)
            else if (size == 'small') small(id, previous, upgrade, comp)
            else MACHINE[size](id, previous, upgrade, comp, size)
            previous = id
        })
    }

    const TO_LUDICROUS = ['tiny', 'small', 'normal', 'reinforced', 'big', 'huge', 'ludicrous']
    const TO_VACUUM = TO_LUDICROUS.concat(['vacuum'])
    const TO_ULTIMATE = TO_LUDICROUS.concat(['ultimate'])

    family(MMR, 'inputbus', TO_LUDICROUS, 'item', false)
    family(MMR, 'outputbus', TO_LUDICROUS, 'item', true)
    family(MMR, 'fluidinputhatch', TO_VACUUM, 'fluid', false)
    family(MMR, 'energyinputhatch', TO_ULTIMATE, 'energy', false)
    family(ARS, 'sourceinputhatch', TO_VACUUM, 'source', false)

    fusion(MMR + 'modularium', 'minecraft:nether_star', [
        ['minecraft:nether_star', 2],
        [MEK + 'alloy_atomic', 4],
        ['draconicevolution:awakened_draconium_ingot', 2],
        [MEK + 'pellet_antimatter', 2]
    ], 'draconic', 50000000).id('kubejs:mmr/modularium')

    sujjslegacy.custom({
        type: 'oritech:assembler',
        ingredients: [
            one(MMR + 'modularium'),
            one(MEK + 'steel_casing'),
            one(MMR + 'modularium'),
            one(MEK + 'alloy_reinforced')
        ],
        results: [{ id: MMR + 'casing_plain', count: 1 }],
        time: 400
    }).id('kubejs:mmr/casing_plain')

    sujjslegacy.custom({
        type: 'modern_industrialization:implosion_compressor',
        eu: 64,
        duration: 400,
        item_inputs: [
            { item: MMR + 'casing_plain', amount: 4 },
            { item: MEK + 'block_refined_obsidian', amount: 4 },
            { item: 'sujjsores:iridium_plate', amount: 2 },
            { item: 'modern_industrialization:industrial_tnt', amount: 4 }
        ],
        item_outputs: [{ item: MMR + 'casing_reinforced', amount: 4 }]
    }).id('kubejs:mmr/casing_reinforced')

    fusion(MMR + 'blueprint', 'minecraft:map', [
        [MEK + 'ultimate_control_circuit', 2],
        ['modern_industrialization:processing_unit', 2],
        ['powah:capacitor_nitro', 2],
        ['oritech:advanced_computing_engine', 2],
        ['sujjsores:iridium_plate', 2],
        ['draconicevolution:awakened_draconium_ingot', 2]
    ], 'draconic', 64000000).id('kubejs:mmr/blueprint')

    fusion({
        id: MMR + 'controller',
        count: 1,
        components: { 'modular_machinery_reborn:machine': 'sujjslegacy:absolute_reactor' }
    }, 'sujjstweaks:radioactive_flask', [
        ['sujjsores:iridium_block', 4],
        ['minecraft:netherite_block', 2],
        [MEK + 'sps_casing', 2],
        ['draconicevolution:chaotic_core', 2],
        [MEK + 'pellet_antimatter', 2],
        ['modern_industrialization:quantum_circuit', 2],
        ['sujjsores:uranium_block', 2]
    ], 'chaotic', 500000000).id('kubejs:mmr/absolute_reactor_controller')
})

// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.
