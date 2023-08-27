ServerEvents.recipes(event => {
    //fixes basalz doll having an invalid forge tag as an input(forge:dust instead of forge:dusts)
    event.remove({id:'exnihilothermal:ens_basalz_doll'})
    event.shaped('exnihilothermal:basalz_doll', ['ABA', 'CDC', 'AEA'], {
        A: '#forge:dusts/obsidian',
        B: '#forge:dusts/redstone',
        C: '#forge:dusts/glowstone',
        D: 'exnihilosequentia:porcelain_doll',
        E: '#forge:crops/nether_wart'
    }).id('kubejs:exnihilothermal/ens_basalz_doll')

    //add missing blitz doll
    event.shaped('exnihilothermal:blitz_doll', ['ABA', 'CDC', 'AEA'], {
        A: '#forge:sand',
        B: '#forge:dusts/redstone',
        C: '#forge:dusts/glowstone',
        D: 'exnihilosequentia:porcelain_doll',
        E: '#forge:crops/nether_wart'
    }).id('kubejs:exnihilothermal/blitz_doll')

})  