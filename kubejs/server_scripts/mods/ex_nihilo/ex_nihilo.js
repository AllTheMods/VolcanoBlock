// priority: 5
ServerEvents.recipes(event => {
    const exDust = `exnihilosequentia:dust`
    const exRack = `exnihilosequentia:crushed_netherrack`
    const exEnd = `exnihilosequentia:crushed_end_stone`

    function sieve(mesh, chance, input, result, wlog) {
        event.custom({
            type: `exnihilosequentia:sieve`,
            rolls: [{
                chance: chance,
                mesh: mesh
            }],
            input: Ingredient.of(input).toJson(),
            result: Item.of(result).toJson()
        })
    }

    function hammer(input, result) {
        event.custom({
            type: `exnihilosequentia:hammer`,
            input: Ingredient.of(input).toJson(),
            results: [{ "item": Item.of(result).id, "chance": 1, "count": 1 }]
        })
    }

    function fluidItem(fluid, input, result) {
        event.custom({
            type: `exnihilosequentia:fluid_item`,
            fluid: Fluid.of(fluid).toJson(),
            input: Ingredient.of(input).toJson(),
            result: Item.of(result).toJson()
        })
    }

    function heat(block, heat) {
        event.custom({
            type: `exnihilosequentia:heat`,
            block: block,
            amount: heat
        })
    }

    function hhammer(input, output, count) {
        event.custom({
            type: `exnihilosequentia:hammer`,
            input: Ingredient.of(input).toJson(),
            results: [{ "item": Item.of(output).id, "chance": 1, "count": count }]
        })
    }

    function crushEm(result, crush) {
        event.custom({
            type: 'mekanism:crushing',
            input: { ingredient: Ingredient.of(crush).toJson() },
            output: Item.of(result).toJson()
        })
        event.custom({
            type: 'thermal:pulverizer',
            ingredient: Ingredient.of(crush).toJson(),
            result: [
                Item.of(result).toJson()
            ]
        })
        event.recipes.immersiveengineering.crusher(Item.of(result), crush)
        event.custom({
            type: `integrateddynamics:squeezer`,
            item: Ingredient.of(crush).toJson(),
            result: {
                items: [Item.of(result).toJson()]
            }
        })
        event.custom({
            type: `integrateddynamics:mechanical_squeezer`,
            item: Ingredient.of(crush).toJson(),
            result: {
                items: [Item.of(result).toJson()]
            },
            duration: 40
        })
    }

    //Crucible heating blocks
    heat(`botania:blaze_block`, 8)
    heat(`alltheores:uranium_block`, 20)
    heat(`mekanism:superheating_element`, 60)

    //Params: Mesh, Drop chance, Input item, Output item, Waterlogged.
    //Overworld sieve
    sieve(`diamond`, 0.2, `#minecraft:sand`, 'powah:uraninite_raw', null) 
    sieve(`diamond`, 0.2, `#minecraft:sand`, `mysticalagriculture:prosperity_shard`, null)
    sieve(`iron`, 0.25, `minecraft:sand`, `minecraft:ink_sac`, true)
    sieve(`emerald`, 0.05, `minecraft:dirt`, `integrateddynamics:menril_berries`, true)

    sieve(`iron`, 0.1, `#forge:gravel`, 'thermal:apatite', null)

    //Basalt
    sieve(`netherite`, 0.2, 'minecraft:basalt', 'ae2:sky_dust', null)
    sieve(`netherite`, 0.2, 'minecraft:basalt', 'minecraft:amethyst_shard', null)
    //sieve(`netherite`, 0.35, 'minecraft:basalt', 'fluxnetworks:flux_dust', null)

    //Oak Leaves
    sieve(`flint`, 0.2, '#minecraft:leaves', 'integrateddynamics:menril_sapling', null)
    sieve(`flint`, 0.2, '#minecraft:leaves', 'ic2:rubber_sapling', null)
    sieve(`flint`, 0.2, '#minecraft:leaves', 'ars_nouveau:blue_archwood_sapling', null)
    sieve(`flint`, 0.2, '#minecraft:leaves', 'ars_nouveau:purple_archwood_sapling', null)
    sieve(`flint`, 0.2, '#minecraft:leaves', 'ars_nouveau:green_archwood_sapling', null)
    sieve(`flint`, 0.2, '#minecraft:leaves', 'ars_nouveau:red_archwood_sapling', null)
    sieve(`flint`, 0.2, '#minecraft:leaves', 'ars_nouveau:yellow_archwood_sapling', null)
    
    //Nether sieve
    sieve(`netherite`, 0.3, exRack, `mysticalagriculture:inferium_essence`, null)
    sieve(`diamond`, 0.15, exRack, `create:rose_quartz`, null)
    sieve(`netherite`, 0.15, exRack, `ae2:certus_quartz_crystal`, null)
    sieve(`iron`, 0.2, exRack, `minecraft:quartz`, null)
    sieve(`iron`, 0.15, `#forge:soul_sand`, `mysticalagriculture:soulium_dust`, null)

    //End sieve
    sieve(`diamond`, 0.1, exEnd, `minecraft:chorus_flower`, null)

    //Hammer recipes
    hammer(`#minecraft:logs`, `thermal:sawdust`)

    //Heavy hammer
    hammer(`allthecompressed:cobblestone_block_1x`, `allthecompressed:gravel_block_1x`)
    hammer(`allthecompressed:gravel_block_1x`, `allthecompressed:sand_block_1x`)
    hhammer(`allthecompressed:sand_block_1x`, exDust, 9)
    hhammer(`allthecompressed:netherrack_block_1x`, exRack, 9)
    hhammer(`allthecompressed:end_stone_block_1x`, exEnd, 9)

    // Xychorium
    sieve(`iron`, 0.5, 'exnihilosequentia:crushed_calcite', 'xycraft_world:xychorium_gem_blue', null)
    sieve(`iron`, 0.5, 'exnihilosequentia:crushed_calcite', 'xycraft_world:xychorium_gem_red', null)
    sieve(`iron`, 0.5, 'exnihilosequentia:crushed_calcite', 'xycraft_world:xychorium_gem_green', null)
    sieve(`iron`, 0.5, 'exnihilosequentia:crushed_calcite', 'xycraft_world:xychorium_gem_light', null)
    sieve(`iron`, 0.5, 'exnihilosequentia:crushed_calcite', 'xycraft_world:xychorium_gem_dark', null)

    crushEm(exDust, `#minecraft:sand`)
    crushEm(exRack, `#forge:netherrack`)
    crushEm(exEnd, `#forge:end_stones`)

    // Fluid Item Transformation
    fluidItem(`exnihilosequentia:witch_water`, `mysticalagriculture:soulium_dust`, `mysticalagriculture:soulstone`)

    event.remove({ id: `minecraft:ens_ancient_debris` })
    event.remove({ id: `exnihiloae:sieve/ens_certus_seed` })

})

