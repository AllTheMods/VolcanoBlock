// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	event.create('allthetweaks:draconic_teleport_core_primed').displayName('§dDraconic Primed Teleportation Core§r').unstackable().texture('mekanism:item/teleportation_core')
	event.create('allthetweaks:ender_teleport_core_primed').displayName('§dEnder Primed Teleportation Core§r').unstackable().texture('mekanism:item/teleportation_core')
	event.create('allthetweaks:nether_teleport_core_primed').displayName('§dNether Primed Teleportation Core§r').unstackable().texture('mekanism:item/teleportation_core')
	event.create('allthetweaks:draconic_teleport_core_infused').displayName('§dDraconic Infused Teleportation Core§r').unstackable().texture('mekanism:item/teleportation_core').glow(true)
	event.create('allthetweaks:ender_teleport_core_infused').displayName('§dEnder Infused Teleportation Core§r').unstackable().texture('mekanism:item/teleportation_core').glow(true)
	event.create('allthetweaks:nether_teleport_core_infused').displayName('§dNether Infused Teleportation Core§r').unstackable().texture('mekanism:item/teleportation_core').glow(true)
})

StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})