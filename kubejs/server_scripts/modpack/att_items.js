ServerEvents.recipes(event => {
  // Dragon Soul
  // Alfred's Proposal
  event.shaped('allthetweaks:dragon_soul', ['CDA', 'SNI', 'BGE'], {
    C: 'mysticalagradditions:dragon_scale',
    D: 'occultism:soul_gem',
    A: 'mysticalagradditions:dragon_egg_chunk',
    S: 'mysticalagradditions:dragon_scale',
    N: 'allthemodium:piglich_heart',
    I: Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:ender_dragon"}}'),
    B: 'minecraft:dragon_breath',
	G: 'exnihilosequentia:end_stone_pebble',
    E: 'ars_nouveau:summon_focus'
  }).id('kubejs:allthetweaks/dragon_soul')

	// Dimensional Seed Recipe
	event.custom({
	  "type": "spirit:soul_engulfing",
      "input": {
      
      "ingredient": {
        "item": "mysticalagriculture:soulium_seed_base"
    },  
    "multiblock": {
      "pattern": [
        [
          " F ", //bottom
          "E@ ", //middle
          " G " //top
        ],
		[
          "ACI",
          "BXD",
          "AHJ"
        ]
      ],
      "keys": {
        "A": {
          "block": "occultism:storage_controller"
			},
        "B": {
          "block": "allthecompressed:netherrack_block_6x"
			},
        "C": {
          "block": "allthecompressed:obsidian_block_5x"
			},
		"D": {
          "block": "allthemodium:teleport_pad"
			},
		"E": {
          "block": "allthetweaks:mini_nether"
			},
		"F": {
          "block": "allthetweaks:mini_exit"
			},
		"G": {
          "block": "allthetweaks:mini_end"
			},
		"H": {
          "block": "allthecompressed:end_stone_block_5x"
			},
		"I": {
          "block": "allthecompressed:emerald_block_5x"
			},
		"J": {
          "block": "allthecompressed:diamond_block_4x"
			},
        "X": {
          "block": "allthecompressed:soul_sand_block_5x"
			}
		}
	}
	},
  "duration": 30,
  "destroysStructure": true,
  "outputItem": "allthetweaks:dimensional_seed"
	}).id('kubejs:allthetweaks/dimensional_seed')

  // Withers Compass
  // Alfred's Proposal
  event.shaped('allthetweaks:withers_compass', ['DED', 'ABA', 'DED'], {
    A: 'mekanism:module_gravitational_modulating_unit',
    B: 'industrialforegoing:wither_builder',
    D: 'ic2:uumatter',
    E: 'mekanism:module_gravitational_modulating_unit'
  }).id('kubejs:allthetweaks/withers_compass')

  // Philosopher's Fuel
  // Alfred's Proposal
  event.shaped('allthetweaks:philosophers_fuel', ['ABC', 'GEE', 'ICI'], {
    A: 'chemlib:oganesson',
    B: 'mekanism:pellet_antimatter',
  	C: Item.of('ic2:uranium_rod_quad', '{Damage:0}').strongNBT(),
    E: 'mysticalagradditions:insanium_coal_block',
  	G: 'mysticalagriculture:awakened_supremium_furnace',
    I: 'ic2:nuclear_reactor'
  }).id('kubejs:allthetweaks/philosophers_fuel')

  // Improbable Probaility Device
  // Alfred's Proposal
  event.shaped('allthetweaks:improbable_probability_device', ['ABA', 'CGE', 'FDF'], {
    A: 'mekanismgenerators:module_solar_recharging_unit',
	B: 'computercraft:pocket_computer_advanced',
    C: ['extradisks:1048576k_storage_part', 'extradisks:1048576k_fluid_storage_part', 'megacells:cell_component_256m'],
    D: 'advgenerators:power_capacitor_tier3',
	E: 'rftoolsutility:flight_module',
    F: Item.of('powah:battery_nitro', '{powah_tile_data:{energy_stored_main_energy:2000000000L}}').strongNBT(),
    G: 'ic2:nuke'
  }).id('kubejs:allthetweaks/improbable_probability_device')

  // Nexium Emitter
  // Alfred's Proposal
  event.shaped('allthetweaks:nexium_emitter', ['A B', ' CF', 'GED'], {
    A: 'powah:player_transmitter_nitro',
    B: [Item.of('ae2wtlib:wireless_universal_terminal', '{crafting:1b,internalMaxPower:4800000.0d,pattern_access:1b,pattern_encoding:1b}'), Item.of('universalgrid:wireless_universal_grid', '{gridType:0}')],
    C: 'mekanism:supercharged_coil',
    D: 'ic2:solar_panel_hv',
    E: 'ae2:singularity',
    F: 'mekanismgenerators:module_solar_recharging_unit',
    G: 'immersiveengineering:tesla_coil'
  }).id('kubejs:allthetweaks/nexium_emitter')

  // Pulsating Black Hole
  // Alfred's Proposal
  event.custom({
    type: 'pneumaticcraft:pressure_chamber',
    inputs: [
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'ic2:nuke', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'ae2:quantum_ring', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:micromissiles', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'mekanism:pellet_antimatter', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'minecraft:nether_star', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'ic2:uumatter', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'industrialforegoing:infinity_nuke', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'apotheosis:vial_of_expulsion', 'count': 1 }
    ],
    pressure: 4.9,
    results: [
      {
        'item': 'allthetweaks:pulsating_black_hole'
      }
    ]
  }).id('kubejs:pressure/allthetweaks/pulsating_black_hole')

  // Oblivion Shard
  // Alfred's Proposal
  event.shaped('allthetweaks:oblivion_shard', [' AB', 'ACA', 'BA '], {
    A: 'spirit:soul_steel_block',
    C: 'ic2:plasma_core',
    B: 'mysticalagradditions:insanium_block'
  }).id('kubejs:allthetweaks/oblivion_shard')

  // Creative Essence
  event.shaped('mysticalagradditions:creative_essence', ['CAC', 'ABA', 'CAC'], {
    A: 'mysticalagradditions:insanium_block',
    C: 'mysticalagradditions:insanium_gemstone_block',
    B: 'mysticalagriculture:master_infusion_crystal'
  }).id('kubejs:allthetweaks/creative_essence')
})
