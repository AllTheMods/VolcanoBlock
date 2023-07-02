ServerEvents.recipes(event => {
    event.forEachRecipe({type:'minecraft:crafting_shaped', id: /tetra:hammer/}, recipe => {
        recipe.json.add('pattern', ["#/#", " / ", " / "])
    })
})