function SoulTransmutation() {
    this.inputentity = 'spirit:soul'
    this.outputentity = ''
    this.consumed = false
    this.duration = 60
    this.mob = false
    this.inputItems = []
}
SoulTransmutation.prototype = {
    isConsumed: function () {
        this.consumed = true
        return this
    },
    setActivator: function (itemString) {
        this.activator = Ingredient.of(itemString).toJson()
        return this
    },
    spawnMob: function () {
        this.mob = true
        return this
    },
    setInputEntity: function (entityInputString) {
        this.inputentity = entityInputString
        return this
    },
    setOutputEntity: function (entityString) {
        this.outputentity = entityString
        return this
    },
    setDuration: function (ticks) {
        this.duration = ticks
        return this
    },
    setMobNbt: function (compoundTagString) {
        this.mobNbt = compoundTagString
        return this
    },
    setItemInputs: function (itemList) {
        this.inputItems = itemList
        return this
    },
    addItemInput: function (itemString) {
        this.inputItems.push(Ingredient.of(itemString).toJson())
        return this
    },
    build: function () {
        let recipe = {
            type: 'spirit:soul_transmutation',
            entityInput: this.inputentity,
            consumesActivator: this.consumed,
            itemInputs: this.inputItems,
            entityOutput: this.outputentity,
            duration: this.duration,
            shouldSummonMob: this.mob,
        }
        if (this.mobNbt !== undefined) {
            recipe.outputNbt = this.mobNbt
        }
        if (this.activator !== undefined) {
            recipe.activatorItem = this.activator
        }
        return recipe
    }
}

ServerEvents.recipes(event => {
    event.custom(
        new SoulTransmutation()
            .setInputEntity('minecraft:guardian')
            .addItemInput('minecraft:sea_lantern')
            .addItemInput('minecraft:prismarine_crystals')
            .addItemInput('minecraft:cod')
            .addItemInput('minecraft:prismarine_shard')
            .addItemInput('minecraft:sea_lantern')
            .addItemInput('minecraft:prismarine_crystals')
            .addItemInput('minecraft:cod')
            .addItemInput('minecraft:prismarine_shard')
            .setOutputEntity('minecraft:elder_guardian')
            .spawnMob()
            .build()
    ).id('kubejs:spirit/elder_guardian')

    event.custom(
        new SoulTransmutation()
            .setActivator('minecraft:water_bucket')
            .isConsumed()
            .addItemInput('minecraft:clay')
            .addItemInput('minecraft:moss_block')
            .addItemInput('minecraft:tropical_fish')
            .addItemInput('minecraft:azalea')
            .addItemInput('minecraft:clay')
            .addItemInput('minecraft:moss_block')
            .addItemInput('minecraft:tropical_fish')
            .addItemInput('minecraft:azalea')
            .setOutputEntity('minecraft:axolotl')
            .spawnMob()
            .build()
    ).id('kubejs:spirit/axolotl')

    event.custom(
        new SoulTransmutation()
            .setInputEntity('minecraft:blaze')
            .addItemInput('minecraft:lightning_rod')
            .addItemInput('#forge:dusts/niter')
            .addItemInput('minecraft:sand')
            .addItemInput('#forge:dusts/niter')
            .addItemInput('minecraft:lightning_rod')
            .addItemInput('#forge:dusts/niter')
            .addItemInput('minecraft:sand')
            .addItemInput('#forge:dusts/niter')
            .setOutputEntity('thermal:blitz')
            .spawnMob()
            .build()
    ).id('kubejs:spirit/thermal/blitz')

    event.custom(
        new SoulTransmutation()
            .setInputEntity('minecraft:blaze')
            .addItemInput('minecraft:ice')
            .addItemInput('minecraft:snowball')
            .addItemInput('minecraft:snow_block')
            .addItemInput('minecraft:snowball')
            .addItemInput('minecraft:ice')
            .addItemInput('minecraft:snowball')
            .addItemInput('minecraft:snow_block')
            .addItemInput('minecraft:snowball')
            .setOutputEntity('thermal:blizz')
            .spawnMob()
            .build()
    ).id('kubejs:spirit/thermal/blizz')

    event.custom(
        new SoulTransmutation()
            .setInputEntity('minecraft:blaze')
            .addItemInput('minecraft:dirt')
            .addItemInput('#forge:dusts/obsidian')
            .addItemInput('minecraft:stone')
            .addItemInput('#forge:dusts/obsidian')
            .addItemInput('minecraft:dirt')
            .addItemInput('#forge:dusts/obsidian')
            .addItemInput('minecraft:stone')
            .addItemInput('#forge:dusts/obsidian')
            .setOutputEntity('thermal:basalz')
            .spawnMob()
            .build()
    ).id('kubejs:spirit/thermal/basalz')

    event.custom(
        new SoulTransmutation()
            .setActivator('minecraft:wheat_seeds')
            .isConsumed()
            .addItemInput('minecraft:dirt')
            .addItemInput('minecraft:grass')
            .addItemInput('minecraft:bone_meal')
            .addItemInput('minecraft:dirt')
            .addItemInput('minecraft:clay')
            .addItemInput('minecraft:grass_block')
            .addItemInput('minecraft:stone')
            .addItemInput('minecraft:bone_meal')
            .setOutputEntity('resourcechickens:chicken')
            .spawnMob()
            .build()
    ).id('kubejs:spirit/chicken')

    event.custom(
        new SoulTransmutation()
            .setActivator('minecraft:wheat')
            .isConsumed()
            .addItemInput('minecraft:leather')
            .addItemInput('minecraft:grass')
            .addItemInput('minecraft:grass')
            .addItemInput('minecraft:bone_meal')
            .addItemInput('minecraft:dirt')
            .addItemInput('minecraft:clay')
            .addItemInput('minecraft:grass_block')
            .addItemInput('minecraft:stone')
            .addItemInput('minecraft:hay_block')
            .setOutputEntity('minecraft:cow')
            .spawnMob()
            .build()
    ).id('kubejs:spirit/cow')

    event.custom(
        new SoulTransmutation()
            .setActivator('minecraft:string')
            .isConsumed()
            .addItemInput('minecraft:dirt')
            .addItemInput('minecraft:grass')
            .addItemInput('minecraft:bone_meal')
            .addItemInput('minecraft:dirt')
            .addItemInput('minecraft:clay')
            .addItemInput('minecraft:grass_block')
            .addItemInput('minecraft:stone')
            .addItemInput('minecraft:white_wool')
            .setOutputEntity('minecraft:sheep')
            .spawnMob()
            .build()
    ).id('kubejs:spirit/sheep')

    event.custom(
        new SoulTransmutation()
            .setActivator('minecraft:carrot')
            .isConsumed()
            .addItemInput('minecraft:dirt')
            .addItemInput('minecraft:grass')
            .addItemInput('minecraft:bone_meal')
            .addItemInput('minecraft:dirt')
            .addItemInput('minecraft:clay')
            .addItemInput('minecraft:grass_block')
            .addItemInput('minecraft:stone')
            .addItemInput('thermal:carrot_block')
            .setOutputEntity('minecraft:pig')
            .spawnMob()
            .build()
    ).id('kubejs:spirit/pig')

    event.custom(
        new SoulTransmutation()
            .setActivator('minecraft:sweet_berries')
            .isConsumed()
            .addItemInput('minecraft:dirt')
            .addItemInput('minecraft:grass')
            .addItemInput('minecraft:bone_meal')
            .addItemInput('minecraft:dirt')
            .addItemInput('minecraft:clay')
            .addItemInput('minecraft:grass_block')
            .addItemInput('minecraft:stone')
            .addItemInput('minecraft:spruce_sapling')
            .setOutputEntity('minecraft:fox')
            .spawnMob()
            .build()
    ).id('kubejs:spirit/fox')

    event.custom(
        new SoulTransmutation()
            .setActivator('minecraft:torch')
            .isConsumed()
            .addItemInput('minecraft:dirt')
            .addItemInput('minecraft:grass')
            .addItemInput('minecraft:bone_meal')
            .addItemInput('minecraft:dirt')
            .addItemInput('minecraft:clay')
            .addItemInput('minecraft:grass_block')
            .addItemInput('minecraft:stone')
            .addItemInput('minecraft:coal_block')
            .setOutputEntity('minecraft:bat')
            .spawnMob()
            .build()
    ).id('kubejs:spirit/bat')

    event.custom(
        new SoulTransmutation()
            .setActivator('minecraft:bone')
            .isConsumed()
            .addItemInput('minecraft:dirt')
            .addItemInput('minecraft:grass')
            .addItemInput('minecraft:bone_meal')
            .addItemInput('minecraft:dirt')
            .addItemInput('minecraft:clay')
            .addItemInput('minecraft:grass_block')
            .addItemInput('minecraft:stone')
            .addItemInput('minecraft:bone_block')
            .setOutputEntity('minecraft:wolf')
            .spawnMob()
            .build()
    ).id('kubejs:spirit/wolf')

    event.custom(
        new SoulTransmutation()
            .setActivator('minecraft:cod')
            .isConsumed()
            .addItemInput('minecraft:dirt')
            .addItemInput('minecraft:grass')
            .addItemInput('minecraft:bone_meal')
            .addItemInput('minecraft:dirt')
            .addItemInput('minecraft:clay')
            .addItemInput('minecraft:grass_block')
            .addItemInput('minecraft:stone')
            .addItemInput('minecraft:cooked_cod')
            .setOutputEntity('minecraft:cat')
            .spawnMob()
            .build()
    ).id('kubejs:spirit/cat')

    event.custom(
        new SoulTransmutation()
            .setActivator('minecraft:glass_bottle')
            .isConsumed()
            .addItemInput('minecraft:dirt')
            .addItemInput('minecraft:grass')
            .addItemInput('minecraft:bone_meal')
            .addItemInput('minecraft:dirt')
            .addItemInput('minecraft:clay')
            .addItemInput('minecraft:grass_block')
            .addItemInput('minecraft:stone')
            .addItemInput('minecraft:sugar')
            .setOutputEntity('minecraft:bee')
            .spawnMob()
            .build()
    ).id('kubejs:spirit/bee')
})
