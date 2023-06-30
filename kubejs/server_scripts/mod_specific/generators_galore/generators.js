ServerEvents.recipes(event => {

	event.shaped('generatorgalore:iron_generator', ['III','IFI','ICI'],
	  {
		I: '#forge:ingots/iron',
		F: 'minecraft:furnace',
		C: 'thermal:rf_coil'
	  })

	event.remove({id: 'generatorgalore:generators/culinary'})  
	event.shaped('generatorgalore:culinary_generator', ['III','IFI','ICI'],
	  {
		I: '#forge:crops',
		F: 'generatorgalore:iron_generator',
		C: 'thermal:rf_coil'
	  })	

	event.shaped('generatorgalore:8xculinary_generator', ['GGG','GFG','GGG'], 
	  {
		G: 'generatorgalore:culinary_generator',
		F: 'thermal:machine_frame'
	  })	

	event.shaped('generatorgalore:8xnetherstar_generator', ['GGG','GFG','GGG'],
	  {
		G: 'generatorgalore:netherstar_generator',
		F: 'thermal:machine_frame'
	  })	

	event.shaped('generatorgalore:64xculinary_generator', ['GGG','GFG','GGG'], 
	  {
		G: 'generatorgalore:8xculinary_generator',
		F: 'thermal:machine_frame'
	  })	

	event.shaped('generatorgalore:64xnetherstar_generator', ['GGG','GFG','GGG'], 
	  {
		G: 'generatorgalore:8xnetherstar_generator',
		F: 'thermal:machine_frame'
	  })	

	})