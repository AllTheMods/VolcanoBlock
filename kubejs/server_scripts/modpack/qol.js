ServerEvents.recipes(event => {
    event.shaped("4x minecraft:chest", ["LLL","L L","LLL"], {L:"#minecraft:logs"}).id('kubejs:qol/log_to_chest')
    event.shaped("16x minecraft:stick", ["L","L"], {L:"#minecraft:logs"}).id('kubejs:qol/log_to_stick')
    event.shapeless("4x minecraft:clay_ball", "minecraft:clay").id('kubejs:qol/clay_to_ball')
    event.shapeless("minecraft:flint", "3x minecraft:gravel").id(`kubejs:qol/gravel_to_flint`)
    event.shapeless("4x minecraft:amethyst_shard", "minecraft:amethyst_block").id(`kubejs:qol/amethyst_to_shard`)
    event.remove({id: 'thermal:earth_charge/quartz_from_quartz_block'})
    event.shapeless("4x minecraft:quartz", "minecraft:quartz_block").id(`kubejs:qol/quartz_to_shard`)
    event.forEachRecipe({type:"minecraft:crafting_shaped", output:/slab/}, recipe => {
        let output = recipe.originalRecipeResult
        if (output.count == 6) {
            let ingredients = recipe.originalRecipeIngredients.stream().distinct().toList()
            if (ingredients.length == 1) {
                event.shaped(ingredients[0].getFirst(), ["S","S"], {S:output.id}).id(`kubejs:qol/${output.id.replace(":","/")}`)
            }
        }
    })
})