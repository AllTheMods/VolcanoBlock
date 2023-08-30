// Suggestions by Draxial, Originals taken from ATM8

ServerEvents.recipes(event => {
    // Draconic Primed Teleportation Core
    event.shapeless('allthetweaks:draconic_teleport_core_primed', ['mekanism:teleportation_core','minecraft:dragon_breath']).id('kubejs:draconic_teleport_core_primed')
    event.shapeless('allthetweaks:ender_teleport_core_primed', ['mekanism:teleportation_core','minecraft:ender_pearl']).id('kubejs:ender_teleport_core_primed')
    event.shapeless('allthetweaks:nether_teleport_core_primed', ['mekanism:teleportation_core','minecraft:netherrack']).id('kubejs:nether_teleport_core_primed')
 
    // Draconic Infused Teleportation Core
    event.custom({
        "type": "spirit:soul_engulfing",
        "input": {
            "ingredient": {
                "item": "allthetweaks:draconic_teleport_core_primed"
            },
            "multiblock": {
                "pattern": [
                    [
                        "   ", //bottom
                        " @ ", //middle
                        "   " //top
                    ],
                    [
                        "ACA",
                        "BXB",
                        "ACA"
                    ]
                ],
                "keys": {
                    "A": {
                        "block": "allthecompressed:obsidian_block_3x"
                    },
                    "B": {
                        "block": "minecraft:dragon_head"
                    },
                    "C": {
                        "block": "allthecompressed:end_stone_block_3x"
                    },
                    "X": {
                        "block": "allthecompressed:soul_sand_block_3x"
                    }
                }
            }
        },
        "duration": 30,
        "destroysStructure": true,
        "outputItem": 'allthetweaks:draconic_teleport_core_infused'
    }).id('kubejs:allthetweaks/draconic_core')
 
    // Ender Infused Teleportation Core
    event.custom({
        "type": "spirit:soul_engulfing",
        "input": {
            "ingredient": {
                "item": "allthetweaks:ender_teleport_core_primed"
            },
            "multiblock": {
                "pattern": [
                    [
                        "   ", //bottom
                        " @ ", //middle
                        "   " //top
                    ],
                    [
                        "ACA",
                        "BXB",
                        "ACA"
                    ]
                ],
                "keys": {
                    "A": {
                        "block": "allthecompressed:obsidian_block_3x"
                    },
                    "B": {
                        "block": "minecraft:dragon_egg"
                    },
                    "C": {
                        "block": "mysticalagradditions:dragon_egg_crux"
                    },
                    "X": {
                        "block": "allthecompressed:soul_sand_block_3x"
                    }
                }
            }
        },
        "duration": 30,
        "destroysStructure": true,
        "outputItem": 'allthetweaks:ender_teleport_core_infused'
    }).id('kubejs:allthetweaks/ender_core')
 
    // Nether Infused Teleportation Core
    event.custom({
        "type": "spirit:soul_engulfing",
        "input": {
            "ingredient": {
                "item": "allthetweaks:nether_teleport_core_primed"
            },
            "multiblock": {
                "pattern": [
                    [
                        "   ", //bottom
                        " @ ", //middle
                        "   " //top
                    ],
                    [
                        "ACA",
                        "BXB",
                        "ACA"
                    ]
                ],
                "keys": {
                    "A": {
                        "block": "allthecompressed:obsidian_block_3x"
                    },
                    "B": {
                        "block": "minecraft:wither_skeleton_skull"
                    },
                    "C": {
                        "block": "allthecompressed:netherrack_block_3x"
                    },
                    "X": {
                        "block": "allthecompressed:soul_sand_block_3x"
                    }
                }
            }
        },
        "duration": 30,
        "destroysStructure": true,
        "outputItem": 'allthetweaks:nether_teleport_core_infused'
    }).id('kubejs:allthetweaks/nether_core')

    // Mini Exit
    event.shaped('allthetweaks:mini_exit', ['ADA', 'BCB', 'DAD'], {
        A: 'fluxnetworks:flux_block',
        B: 'minecraft:dragon_egg',
        C: 'allthetweaks:draconic_teleport_core_infused',
        D: 'minecraft:end_crystal'
    }).id('kubejs:allthetweaks/mini_exit')

    // Mini End
    event.shaped('allthetweaks:mini_end', ['AEA', 'BCB', 'DED'], {
        A: 'allthecompressed:ender_pearl_block_3x',
        B: 'minecraft:ender_eye',
        C: 'allthetweaks:ender_teleport_core_infused',
        D: 'allthecompressed:end_stone_block_3x',
        E: 'minecraft:dragon_head'
    }).id('kubejs:allthetweaks/mini_end')

    // Mini Nether
    event.shaped('allthetweaks:mini_nether', ['ADA', 'BCB', 'AEA'], {
        A: 'minecraft:obsidian',
        B: 'minecraft:nether_star',
        C: 'allthetweaks:nether_teleport_core_infused',
        D: 'minecraft:wither_skeleton_skull',
        E: 'minecraft:warped_nylium'
    }).id('kubejs:allthetweaks/mini_nether')
})