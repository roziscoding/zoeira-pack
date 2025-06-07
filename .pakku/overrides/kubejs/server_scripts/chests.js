ServerEvents.recipes((event) => {
  event.shaped(
    Item.of('minecraft:chest', 4),
    [
      'LLL',
      'L L',
      'LLL'
    ],
    {
      L: '#minecraft:logs'
    }
  )
})
