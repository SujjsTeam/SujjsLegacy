// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.

ServerEvents.recipes(sujjslegacy => {
  sujjslegacy.remove({ output: 'sujjstweaks:atomic_bomb' })

  sujjslegacy.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: false,
    category: 'misc',
    show_notification: true,
    pattern: [
      '  N  ',
      ' PZP ',
      'HCMCH',
      'RPUPR',
      'F B F'
    ],
    key: {
      N: { item: 'ad_astra:rocket_nose_cone' },
      Z: { item: 'create_radar:advanced_proxy_fuze' },
      P: { item: 'mekanism:pellet_antimatter' },
      H: { item: 'createbigcannons:he_shell' },
      C: { item: 'draconicevolution:wyvern_core' },
      M: { item: 'oritech:nuke' },
      U: { item: 'modern_industrialization:plutonium_block' },
      R: { item: 'sujjstweaks:radioactive_flask' },
      B: { item: 'bigreactors:blutonium_block' },
      F: { item: 'ad_astra:rocket_fin' }
    },
    result: { id: 'sujjstweaks:atomic_bomb', count: 1 }
  }).id('kubejs:atomic_bomb')
})

// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.
