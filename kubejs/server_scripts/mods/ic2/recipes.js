ServerEvents.recipes(event => {
    event.remove({ type: "ic2:cooking_ic2_serializer", id: /ingot/ })

    let dustBlocks = ["tin", "bronze", "silver", "aluminium"]
    // iron,gold,copper skipped as they are properly the vanilla blocks
    dustBlocks.forEach(dust => {
        event.remove({ id: `ic2:${dust}_dust_block_blast` })
        event.remove({ id: `ic2:${dust}_dust_block_smelter` })
        event.smelting(`alltheores:${dust == "aluminium" ? "aluminum" : dust}_block`, `ic2:${dust}_dust_block`).cookingTime(800).id(`kubejs:smelting/ic2/${dust}_dust_block`)
        event.blasting(`alltheores:${dust == "aluminium" ? "aluminum" : dust}_block`, `ic2:${dust}_dust_block`).cookingTime(400).id(`kubejs:blasting/ic2/${dust}_dust_block`)
    })
    
    //fixes weirdness with servers having ic2 aluminum ingot as the recipe despite it being removed
    event.remove({id:'ic2:advanced_alloy'})
    event.shaped('ic2:ingot_advanced_alloy', ['AAA', 'BBB', 'CCC'], {
        A: 'ic2:ingot_refined_iron',
        B: '#forge:ingots/bronze',
        C: '#forge:ingots/aluminum'
    }).id('kubejs:ic2/advanced_alloy')
})