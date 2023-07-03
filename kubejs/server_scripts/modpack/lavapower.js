ServerEvents.recipes(event => {

  event.remove({id: 'ic2:geothermal'})
  event.remove({id: 'thermal:dynamo_magmatic'})
  event.remove({id: `/powah:crafting\/magmator/`})
  event.remove({id: `/powah:crafting\/thermo/`})
  event.remove({id: 'mekanismgenerators:generator/heat'})
})
