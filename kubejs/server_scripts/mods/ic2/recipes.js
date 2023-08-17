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
})