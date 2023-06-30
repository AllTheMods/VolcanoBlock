JEIEvents.hideItems(event => {
  event.hide('twilightforest:uncrafting_table')
  event.hide(['angelring:leadstone_angel_ring', 'angelring:hardened_angel_ring', 'angelring:reinforced_angel_ring', 'angelring:resonant_angel_ring'])
  event.hide('spirit:compressed_soul_sand')
  event.hide('reliquary:rod_of_lyssa')
  event.hide('mekanism:upgrade_anchor')
  event.hide(['mysticalagradditions:gaia_spirit_crux', 'mysticalagradditions:awakened_draconium_crux'])
  event.hide('ars_nouveau:glyph_animate_block')
  event.hide('generatorgalore:*_upgrade')
  event.hide([
    'absentbydesign:slab_tuff',
    'absentbydesign:stairs_tuff',
    'absentbydesign:wall_tuff',
    'absentbydesign:wall_calcite',
    'absentbydesign:stairs_calcite',
    'absentbydesign:slab_calcite'
  ])

  if (global.chunk) {
    event.hide('mekanism:dimensional_stabilizer')
    event.hide('ae2:spatial_anchor')
  }
})
