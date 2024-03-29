ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:atomic_disassembler' })
  event.shaped('mekanism:atomic_disassembler', ['ITI', 'IAI', ' P '], {
    I: 'mekanism:alloy_infused',
    T: 'mekanism:energy_tablet',
    A: 'mekanism:alloy_atomic',
    P: 'allthemodium:allthemodium_pickaxe'
  })
  event.remove({ id: 'mekanism:meka_tool' })
  event.shaped('mekanism:meka_tool', ['UCU', 'TDT', 'PBP'], {
    U: 'mekanism:ultimate_control_circuit',
    C: 'mekanism:configurator',
    T: '#forge:plates/unobtainium',
    D: 'mekanism:atomic_disassembler',
    B: 'mekanism:basic_induction_cell',
    P: 'mekanism:pellet_polonium'
  })
  event.remove({ id: 'mekanism:upgrade/anchor' })

  // remove combiner recipes for ores
  event.remove({ type: 'mekanism:combining', id: /ore/ })

  // geothermal generator unit recipe fix
  event.remove({ id: 'mekanismgenerators:module_geothermal_generator_unit' })
  event.shaped('mekanismgenerators:module_geothermal_generator_unit', ['BCB', 'BDB', 'AAA'], {
    A:'mekanism:pellet_polonium',
    B:'mekanism:alloy_reinforced',
    C:'immersiveengineering:thermoelectric_generator',
    D:'mekanism:module_base' 
  }).id('mekanismgenerators:module_geothermal_generator_unit')
})
