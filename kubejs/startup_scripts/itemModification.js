ItemEvents.modification(event => {
    event.modify('minecraft:lava_bucket', item => {
        item.setBurnTime(0)
    })
})