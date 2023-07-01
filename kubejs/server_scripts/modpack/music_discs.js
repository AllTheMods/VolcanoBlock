///# What are you doing in here?
ServerEvents.recipes(e => {
    //Vanilla
    e.shaped('minecraft:music_disc_otherside',['MC','SD'],{
        M: 'mysticalagriculture:blank_record',
        C: 'mysticalagriculture:creeper_essence',
        S: 'mysticalagriculture:skeleton_essence',
        D: 'minecraft:blue_dye'
    }).id('kubejs:minecraft/music_disk_otherside')
  
    //Ars Nouveau
    e.shaped('ars_nouveau:music_disc_aria_biblio',['MC','SD'],{
        M: 'mysticalagriculture:blank_record',
        C: 'ars_nouveau:mendosteen_pod',
        S: 'ars_nouveau:bombegranate_pod',
        D: 'ars_nouveau:source_gem'
    }).id('kubejs:ars_nouveau/music_disc_aria_biblio') 

    //botania
    e.shaped('botania:record_gaia_1',['MC','SD'],{
        M: 'mysticalagriculture:blank_record',
        C: 'botania:manasteel_nugget',
        S: 'mysticalagriculture:mystical_flower_essence',
        D: 'botania:gray_petal'
    }).id('kubejs:botania/record_gaia_1')
    e.shaped('botania:record_gaia_2',['MC','SD'],{
        M: 'mysticalagriculture:blank_record',
        C: 'botania:manasteel_nugget',
        S: 'mysticalagriculture:mystical_flower_essence',
        D: 'botania:black_petal'
    }).id('kubejs:botania/record_gaia_2')

})
