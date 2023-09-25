ItemEvents.modification(event => {
    event.modify(['minecraft:lava_bucket', 'ic2:cell_lava'], , item => {
        item.setBurnTime(0)
    })
})