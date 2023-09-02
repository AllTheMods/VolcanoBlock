ServerEvents.recipes( event => {
	event.remove({ id: `xycraft_world:aluminum_raw_block` })
	event.remove({ id: `xycraft_world:compacting/aluminum_raw` })
	//event.remove({ id: `alltheores:raw_aluminum_block` })
	//event.shapeless('9x alltheores:raw_aluminum').id('kubejs:alltheores/raw_aluminum_block')
})