// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.

ServerEvents.recipes(sujjslegacy => {
    const materials = [
        'aluminum', 'lead', 'nickel', 'silver', 'tin', 'zinc', 'osmium', 'platinum', 'uranium', 'iridium',
        'fluorite', 'ruby', 'sapphire', 'sulfur', 'niter', 'salt',
        'brass', 'bronze', 'constantan', 'electrum', 'enderium', 'invar', 'lumium', 'signalum', 'steel'
    ]
    const forms = ['ingots', 'nuggets', 'raw_materials', 'storage_blocks', 'gems', 'dusts', 'plates', 'gears', 'rods']
    const types = ['minecraft:crafting_shaped', 'minecraft:crafting_shapeless', 'minecraft:smelting', 'minecraft:blasting']
    const mods = [
        'mekanism', 'modern_industrialization', 'occultism', 'industrialforegoing',
        'ae2', 'thermal', 'immersiveengineering', 'create', 'oritech'
    ]

    const outputs = []
    materials.forEach(material => {
        forms.forEach(form => outputs.push(`#c:${form}/${material}`))
    })

    const filters = []
    mods.forEach(mod => {
        types.forEach(type => filters.push({ mod: mod, type: type, output: outputs }))
    })

    sujjslegacy.remove(filters)
})

// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.
