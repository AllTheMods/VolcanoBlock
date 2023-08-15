let EccentricTome = Item.of('eccentrictome:tome',
  {
    "eccentrictome:mods": {
      advancedperipherals: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "advancedperipherals:manual" } } },
      alchemistry: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "alchemistry:alchemistry_book" } } },
      allthemodium: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "allthemodium:allthemodium" } } },
      apotheosis: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "apotheosis:apoth_chronicle" } } },
      ars_nouveau: { 0: { Count: 1, id: "ars_nouveau:worn_notebook" } },
      botania: { 0: { Count: 1, id: "botania:lexicon" } },
      ftbquests: { 0: { Count: 1, id: "ftbquests:book" } },
      ic2: { 0: { Count: 1, id: "ic2:wiki_item" } },
      immersiveengineering: { 0: { Count: 1, id: "immersiveengineering:manual" } },
      industrialforegoing: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "industrialforegoing:industrial_foregoing" } } },
      integrateddynamics: { 0: { Count: 1, id: "integrateddynamics:on_the_dynamics_of_integration" } },
      laserio: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "laserio:laseriobook" } } },
      modularrouters: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "modularrouters:book" } } },
      mysticalagriculture: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "mysticalagriculture:guide" } } },
      pneumaticcraft: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "pneumaticcraft:book" } } },
      powah: { 0: { Count: 1, id: "powah:book" } },
      rftoolsbase: { 0: { Count: 1, id: "rftoolsbase:manual" } },
      thermal: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "thermal:guidebook" } } }
    }
  }
)

ServerEvents.recipes(event => {
  event.shapeless(EccentricTome, ['eccentrictome:tome', 'minecraft:stick']).id('kubejs:full_tome')
})