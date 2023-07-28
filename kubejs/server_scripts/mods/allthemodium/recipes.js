ServerEvents.recipes(event => {
    event.shaped('kubejs:piglich_heart_block', ['HHH','HHH','HHH'],{
        H: 'allthemodium:piglich_heart'
    }).id('kubejs:shaped_heart_block')
    event.shapeless('9x allthemodium:piglich_heart', 'kubejs:piglich_heart_block').id('kubejs:shapeless_piglich_heart')

    event.shaped('allthemodium:allthemodium_ingot', [
        ' U ',
        'UIU',
        ' U '
      ], {
        I: 'minecraft:gold_ingot',
        U: 'ic2:uumatter'
        })
// Vibranium Ingot
event.custom({
  type: 'powah:energizing',
  ingredients: [
    Ingredient.of('chemlib:thulium_ingot').toJson(),
    Ingredient.of('ic2:uumatter').toJson(),
    Ingredient.of('minecraft:glowstone_dust').toJson()
  ],
  energy: '500000',
  result: Item.of('allthemodium:vibranium_ingot').toJson()
}).id(`kubejs:energizing/allthemodium_vibranium_ingot`)

// Unob ingot Ingot
event.custom({
  type: 'powah:energizing',
  ingredients: [
    Ingredient.of('thermal_extra:dragonsteel_ingot').toJson(),
    Ingredient.of('minecraft:wither_skeleton_skull').toJson(),
    Ingredient.of('allthemodium:unobtainium_ingot').toJson()
  ],
  energy: '2500000',
  result: Item.of('allthemodium:unobtainium_ingot').toJson()
}).id(`kubejs:energizing/allthemodium_unobtainium_ingot`)  
})