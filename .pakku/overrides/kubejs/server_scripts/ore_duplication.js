ServerEvents.recipes((event) => {
  function double(inputOre, outputOre, additionalExperience, block) {
    event.remove({
      type: 'create:crushing',
      output: outputOre,
      ingredients: [inputOre]
    })

    event.custom({
      type: 'create:crushing',
      ingredients: [
        {
          item: inputOre
        }
      ],
      processingTime: 250,
      results: [
        {
          id: outputOre,
          count: 2
        },
        {
          chance: 0.75,
          id: 'create:experience_nugget',
          count: additionalExperience ? 2 : 1
        }
      ]
    })

    if (block) {
      event.custom({
        type: 'create:crushing',
        ingredients: [
          {
            item: block
          }
        ],
        processingTime: 250,
        results: [
          {
            id: outputOre,
            count: 18
          },
          {
            chance: 0.75,
            id: 'create:experience_nugget',
            count: 9
          }
        ]
      })
    }
  }

  double('minecraft:raw_iron', 'create:crushed_raw_iron', false, 'minecraft:raw_iron_block')
  double('minecraft:raw_gold', 'create:crushed_raw_gold', true, 'minecraft:raw_gold_block')
  double('minecraft:raw_copper', 'create:crushed_raw_copper', false, 'minecraft:raw_copper_block')
  double('create:raw_zinc', 'create:crushed_raw_zinc', false)
  double('silentgear:raw_crimson_iron', 'silentgear:crimson_iron_dust', false)
  double('silentgear:raw_azure_silver', 'silentgear:azure_silver_dust', false)
})