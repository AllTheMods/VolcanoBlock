ServerEvents.recipes(event => {
 event.remove({id: 'angelring:angel_ring'})
 event.shaped('angelring:angel_ring', [
  'CAC',
  'ARA',
  'DAD'
], {
  C: 'minecraft:netherite_ingot',
  A: '2x alltheores:enderium_ingot',
  R: 'angelring:diamond_ring',
  D: '#forge:nether_stars'
  })
  })