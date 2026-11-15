// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.

ServerEvents.recipes((sujjslegacy) => {

  sujjslegacy.remove({ id: 'industrialforegoing:iron_gear' })
  sujjslegacy.remove({ id: 'industrialforegoing:gold_gear' })
  sujjslegacy.remove({ id: 'industrialforegoing:diamond_gear' })

  function laserDrillFluidWithEntity(output, entity, catalyst, depthMin, depthMax, weight) {
    sujjslegacy
      .custom({
        type: "industrialforegoing:laser_drill_fluid",

        output: output,

        entity_data: {
          data: {},
          display: "",
          entity: {
            type: entity
          }
        },

        rarity: [
          {
            biome_filter: {
              whitelist: [],
              blacklist: []
            },
            dimension_filter: {
              whitelist: [],
              blacklist: []
            },
            depth_min: depthMin,
            depth_max: depthMax,
            weight: weight
          }
        ],

        catalyst: {
          item: catalyst
        }
      })
      .id("kubejs:industrialforegoing/laser_drill_fluid/nucleon")
  }

  laserDrillFluidWithEntity(
    {
      fluid: "kubejs:nucleon",
      amount: 1
    },
    "sujjstweaks:nucleon",
    "industrialforegoing:green_laser_lens",
    -64,
    256,
    1
  )

})

// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.
