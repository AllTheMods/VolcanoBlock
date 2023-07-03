let spawns = [
    "ancient", // nether_wastes
    "blaze", // nether_wastes
    "bone", // nether_wastes
    "cacti", // desert
    "chicken", // most biomes
    "duck", // plains, river, beach
    "duck_mallard", // plains, river, beach
    "enderman", // end
    "flint", // stony_shore, windswept_gravelly_hills
    "lava", // nether_wastes
    "log",
    "netherite", // nether_wastes
    "quartz", // nether_wastes
    "sand", // beach, desert
    "soulsand", // soul_sand_valley
    "vanilla", // removes vanilla chicken
    "water" // snowy_plains
]

ServerEvents.highPriorityData(event => {

    // adding chickens to desert
    event.addJson('resourcechickens:forge/biome_modifier/chicken', {
            "type": "resourcechickens:add_spawns",
            "whitelist": [
              "minecraft:desert"
            ],
            "spawners": {
              "type": "resourcechickens:chicken",
              "weight": 15,
              "minCount": 1,
              "maxCount": 3
            }
    })
})