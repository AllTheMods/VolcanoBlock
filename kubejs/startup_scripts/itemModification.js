ItemEvents.modification(event => {
    event.modify('minecraft:lava_bucket', , item => {
        item.setBurnTime(0)

    event.modify('ic2:cell_lava', , item => {
        item.setBurnTime(0)
    })
})