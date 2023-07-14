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
        I: 'minecraft:iron_ingot',
        U: 'ic2:uumatter',
        R: 'angelring:diamond_ring',
        D: '#forge:nether_stars'
        })
})