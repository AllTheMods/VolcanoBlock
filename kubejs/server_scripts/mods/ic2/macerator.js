let materials = [
    "aluminum",
    "lead",
    "nickel",
    "osmium",
    "platinum",
    "silver",
    "tin",
    "uranium",
    "zin",
    "iridium",
    "iron",
    "copper",
    "gold"
]
let input = {
    "forge:ores/":{id:"{mat}_ore_to_dust", count:2, xp: 1.0, time: 1.0},
    "forge:ingots/":{id:"{mat}_ingot_to_dust", count:1, xp: 0.1, time: 1.0},
    "forge:storage_blocks/":{id:"{mat}_block_to_dust", count:9, xp: 0.9, time: 4.0},
    "forge:storage_blocks/raw_":{id:"raw_{mat}_block_to_dust", count:18, xp: 9.0, time: 4.0},
    "forge:raw_materials/":{id:"raw_{mat}_to_dust", count:2, xp: 1.0, time: 1.0}
}

ServerEvents.highPriorityData(event => {
    materials.forEach(material => {
        Object.keys(input).forEach(tag => {
            let data = input[tag]
            event.addJson(`ic2:ic2_recipes/macerator/${data.id.replace("{mat}",material)}`, {
                "input": {
                    "tag": tag + material,
                    "size": 1,
                    "type": "ic2:tag"
                },
                "output": {
                    "xp": data.xp,
                    "nbt": `{time_mod:${data.time}d}`,
                    "outputs": [
                        {
                            "item": `alltheores:${material}_dust`,
                            "count": data.count
                        }
                    ],
                    "type": "ic2:simple"
                }
            })
        })
    })
})