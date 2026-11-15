// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.

ServerEvents.recipes(sujjslegacy => {
    const SC = 'scguns:'
    const ORES = [SC + 'anthralite_ore', SC + 'deepslate_anthralite_ore']

    const sized = (item, count) => ({ count: count, item: item })
    const stack = (id, count) => ({ count: count, id: id })
    const oreName = ore => ore.split(':')[1]

    const purifying = (name, input, inputCount, oxygen, output, count) => {
        sujjslegacy.custom({
            type: 'mekanism:purifying',
            chemical_input: { amount: oxygen, chemical: 'mekanism:oxygen' },
            item_input: sized(input, inputCount),
            output: stack(output, count),
            per_tick_usage: true
        }).id(`kubejs:scguns/mekanism/clump/${name}`)
    }

    const injecting = (name, input, inputCount, chloride, output, count) => {
        sujjslegacy.custom({
            type: 'mekanism:injecting',
            chemical_input: { amount: chloride, chemical: 'mekanism:hydrogen_chloride' },
            item_input: sized(input, inputCount),
            output: stack(output, count),
            per_tick_usage: true
        }).id(`kubejs:scguns/mekanism/shard/${name}`)
    }

    const simple = (type, folder, name, input, inputCount, output, count) => {
        sujjslegacy.custom({
            type: `mekanism:${type}`,
            input: sized(input, inputCount),
            output: stack(output, count)
        }).id(`kubejs:scguns/mekanism/${folder}/${name}`)
    }

    ORES.forEach(ore => {
        purifying(`from_${oreName(ore)}`, ore, 1, 1, SC + 'clump_anthralite', 3)
        injecting(`from_${oreName(ore)}`, ore, 1, 1, SC + 'shard_anthralite', 4)
        simple('enriching', 'dust', `from_${oreName(ore)}`, ore, 1, SC + 'anthralite_dust', 2)
    })

    purifying('from_raw_block', SC + 'raw_anthralite_block', 1, 2, SC + 'clump_anthralite', 18)
    purifying('from_raw_ore', SC + 'raw_anthralite', 1, 1, SC + 'clump_anthralite', 2)
    purifying('from_shard', SC + 'shard_anthralite', 1, 1, SC + 'clump_anthralite', 1)

    injecting('from_raw_block', SC + 'raw_anthralite_block', 1, 2, SC + 'shard_anthralite', 24)
    injecting('from_raw_ore', SC + 'raw_anthralite', 3, 1, SC + 'shard_anthralite', 8)

    simple('crushing', 'dirty_dust', 'from_clump', SC + 'clump_anthralite', 1, SC + 'dirty_dust_anthralite', 1)
    simple('crushing', 'dust', 'from_ingot', SC + 'anthralite_ingot', 1, SC + 'anthralite_dust', 1)
    simple('enriching', 'dust', 'from_dirty_dust', SC + 'dirty_dust_anthralite', 1, SC + 'anthralite_dust', 1)
    simple('enriching', 'dust', 'from_raw_block', SC + 'raw_anthralite_block', 1, SC + 'anthralite_dust', 12)
    simple('enriching', 'dust', 'from_raw_ore', SC + 'raw_anthralite', 3, SC + 'anthralite_dust', 4)

    sujjslegacy.custom({
        type: 'mekanism:combining',
        extra_input: { count: 1, tag: 'c:cobblestones/normal' },
        main_input: sized(SC + 'raw_anthralite', 8),
        output: stack(SC + 'anthralite_ore', 1)
    }).id('kubejs:scguns/mekanism/ore/from_raw')

    sujjslegacy.custom({
        type: 'mekanism:combining',
        extra_input: { count: 1, tag: 'c:cobblestones/deepslate' },
        main_input: sized(SC + 'raw_anthralite', 8),
        output: stack(SC + 'deepslate_anthralite_ore', 1)
    }).id('kubejs:scguns/mekanism/ore/deepslate_from_raw')

    const crusher = (name, input, result, secondaries) => {
        sujjslegacy.custom({
            type: 'immersiveengineering:crusher',
            energy: 6000,
            input: { item: input },
            result: result,
            secondaries: secondaries
        }).id(`kubejs:scguns/immersiveengineering/crusher/${name}`)
    }

    const NICKEL = [{ chance: 0.1, output: { basePredicate: { tag: 'c:dusts/nickel' }, count: 1 } }]

    crusher('ore_anthralite_1', SC + 'anthralite_ore', stack(SC + 'anthralite_dust', 2), NICKEL)
    crusher('ore_anthralite_2', SC + 'deepslate_anthralite_ore', stack(SC + 'anthralite_dust', 2), NICKEL)
    crusher('raw_anthralite', SC + 'raw_anthralite', stack(SC + 'anthralite_dust', 1), [])
    crusher('ore_sulfur_1', SC + 'sulfur_ore', stack(SC + 'sulfur_chunk', 3), [])
    crusher('chunk_sulfur', SC + 'sulfur_chunk', { basePredicate: { tag: 'c:dusts/sulfur' }, count: 2 }, [])

    const charging = (name, input, output, energy, rate) => {
        sujjslegacy.custom({
            type: 'createaddition:charging',
            energy: energy,
            ingredients: [{ item: input }],
            max_charge_rate: rate,
            results: [{ id: output }]
        }).id(`kubejs:scguns/create/charging/${name}`)
    }

    charging('charged_amethyst_shard', 'minecraft:amethyst_shard', SC + 'charged_amethyst_shard', 3200, 400)
    charging('depleted_energy_core', SC + 'depleted_energy_core', SC + 'energy_core', 4800, 400)
    charging('plasma', 'minecraft:redstone', SC + 'plasma', 3200, 400)
    charging('plasma_block', 'minecraft:redstone_block', SC + 'plasma_block', 26000, 2400)
    charging('plasma_core', SC + 'energy_core', SC + 'plasma_core', 16000, 400)
    charging('shock_cell', SC + 'empty_cell', SC + 'shock_cell', 1600, 200)

    sujjslegacy.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: true,
        category: 'misc',
        show_notification: false,
        pattern: ['MKX', 'LRJ', 'Q A'],
        key: {
            Q: { item: SC + 'gun_grip' },
            L: { item: SC + 'rapid_firing_unit' },
            R: { item: SC + 'heavy_gun_parts' },
            J: { item: SC + 'heavy_gun_barrel' },
            M: { item: SC + 'treated_brass_ingot' },
            X: { item: SC + 'treated_brass_blueprint' },
            K: { item: SC + 'treated_brass_gun_frame' },
            A: { item: SC + 'gun_magazine' }
        },
        result: { id: SC + 'jr_wristbreaker', count: 1 }
    }).id('kubejs:scguns/create/mechanical_crafting/jr_wristbreaker')
})

// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.
