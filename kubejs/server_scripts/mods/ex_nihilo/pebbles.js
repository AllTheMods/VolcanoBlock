BlockEvents.rightClicked(event => {
    const { hand, block, player, item, facing } = event
    if (hand != 'MAIN_HAND') return
    if (!block.hasTag('minecraft:dirt')) return
    if (!item.isEmpty()) return
    if (!player.isShiftKeyDown()) return
    let loot = [
        "exnihilosequentia:andesite_pebble",
        "exnihilosequentia:basalt_pebble",
        "exnihilosequentia:blackstone_pebble",
        "exnihilosequentia:diorite_pebble",
        "exnihilosequentia:granite_pebble"
    ]
    let random = Math.floor(Math.random() * 2 * loot.length)
    let dropItem = Item.of(loot[random] ?? "exnihilosequentia:stone_pebble")
    block.popItemFromFace(dropItem, facing)
    player.swing()
})