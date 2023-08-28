ServerEvents.recipes(event => {
    //qol, allows conversion back to the respectives ic2 blocks
    event.shapeless('ic2:flux_generator_lv', 'euconverter:lv_converter').id('kubejs:qol/euconverters/lv_converter_to_ic2')
    event.shapeless('ic2:flux_generator_mv', 'euconverter:mv_converter').id('kubejs:qol/euconverters/mv_converter_to_ic2')
    event.shapeless('ic2:flux_generator_hv', 'euconverter:hv_converter').id('kubejs:qol/euconverters/hv_converter_to_ic2')
})  
