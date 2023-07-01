ServerEvents.recipes(event => {
    event.shaped('generatorgalore:iron_generator', ['III', 'IFI', 'ICI'], {
        I: '#forge:ingots/iron',
        F: 'minecraft:furnace',
        C: 'thermal:rf_coil'
    }).id('kubejs:generatorgalore/iron_generator')

    event.remove({ id: 'generatorgalore:generators/culinary' })
    event.shaped('generatorgalore:culinary_generator', ['III', 'IFI', 'ICI'], {
        I: '#forge:crops',
        F: 'generatorgalore:iron_generator',
        C: 'thermal:rf_coil'
    }).id('kubejs:generatorgalore/culinary_generator')

    event.shaped('generatorgalore:iron_to_culinary_upgrade', ['III', 'IFI', 'ICI'], {
        I: '#forge:crops',
        F: 'minecraft:item_frame',
        C: 'thermal:rf_coil'
    }).id('kubejs:generatorgalore/iron_to_culinary_upgrade')

    let upgrades = {
        'generatorgalore:netherstar_to_8xnetherstar_upgrade': { from: 'generatorgalore:netherstar_generator', to: 'generatorgalore:8xnetherstar_generator' },
        'generatorgalore:8xnetherstar_to_64xnetherstar_upgrade': { from: 'generatorgalore:8xnetherstar_generator', to: 'generatorgalore:64xnetherstar_generator' },
        'generatorgalore:culinary_to_8xculinary_upgrade': { from: 'generatorgalore:culinary_generator', to: 'generatorgalore:8xculinary_generator' },
        'generatorgalore:8xculinary_to_64xculinary_upgrade': { from: 'generatorgalore:8xculinary_generator', to: 'generatorgalore:64xculinary_generator' }
    }

    for (let upgrade in upgrades) {
        let gen = upgrades[upgrade]

        event.shaped(upgrade, ['GGG', 'GFG', 'GCG'], {
            G: gen.from,
            F: 'thermal:machine_frame',
            C: 'thermal:rf_coil'
        }).id(`kubejs:${upgrade.replace(':', '/')}`)

        event.shaped(gen.to, ['GGG', 'GFG', 'GGG'], {
            G: gen.from,
            F: 'thermal:machine_frame'
        }).id(`kubejs:${gen.to.replace(':', '/')}`)
    }
})

let customGens = [
    'generatorgalore:8xnetherstar_generator',
    'generatorgalore:64xnetherstar_generator',
    'generatorgalore:8xculinary_generator',
    'generatorgalore:64xculinary_generator'
]

ServerEvents.tags('block', event => {
    event.add('minecraft:mineable/pickaxe', customGens)
})

ServerEvents.blockLootTables(event => {
    for (let gen of customGens) {
        event.addSimpleBlock(gen)
    }
})
