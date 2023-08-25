ServerEvents.recipes(event => {
    event.shapeless('9x spirit:soul_steel_ingot', 'spirit:soul_steel_block').id('kubejs:spirit_qol/soul_steel_block_to_ingot')

    //fixes spirit soul sand interferring with autocraft of atc soul sand
    event.remove({output:'spirit:compressed_soul_sand'})
    event.shapeless('spirit:compressed_soul_sand', 'allthecompressed:soul_sand_block_1x').id('kubejs:spiritsoulsand_to_atc')
    event.shapeless('allthecompressed:soul_sand_block_1x', 'spirit:compressed_soul_sand').id('kubejs:atcsoulsand_to_spirit')
})  