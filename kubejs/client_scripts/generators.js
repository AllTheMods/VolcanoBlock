ClientEvents.highPriorityAssets(event => {

    let InsertPath = (id, path) => {
        let rlID = Utils.id(id)
        return `${rlID.getNamespace()}:${path}${rlID.getPath()}`
    }

    /**
     * Generates the necessary assets for a Generator Galore custom generator
     * @param {ResourceLocation} id Resource Location of the generator
     * @param {string} lang Formatted Name of the generator
     * @param {ResourceLocation} sideModel Required - Sets the side textures
     * @param {ResourceLocation} faceModel Sets the face texture, null defaults to #side
     * @param {ResourceLocation} backModel Sets the back texture, null defaults to #side
     * @param {ResourceLocation} topModel Sets the top texture, null defaults to #side
     * @param {ResourceLocation} frontModel Sets the front texture, null defaults to generator_off
     * @param {ResourceLocation} frameModel Sets the frame texture, null defaults to generator_frame
    */

    let GeneratorModel = (id, lang, sideModel, faceModel, backModel, topModel, frontModel, frameModel) => {
        let genLoc = InsertPath(id, 'block/')
        let genOnLoc = InsertPath(id + '_on', 'block/')

        event.addLang(`block.${id.replace(":", ".")}`, lang)

        event.addModel('block', id, model => {
            model.parent('generatorgalore:block/generator')
            if (sideModel) {
                model.texture('side', sideModel)
            }
            if (faceModel) {
                model.texture('face', faceModel)
            }
            if (backModel) {
                model.texture('back', backModel)
            }
            if (topModel) {
                model.texture('top', topModel)
            }
            if (frontModel) {
                model.texture('front', frontModel)
            }
            if (frameModel) {
                model.texture('frame', frameModel)
            }
        })

        event.addModel('block', `${id}_on`, model => {
            model.parent(genLoc)
            if (frontModel) {
                model.texture('front', `${frontModel}_on`)
            } else {
                model.texture('front', 'generatorgalore:block/generator_on')
            }
        })

        event.addModel('item', id, model => {
            model.parent(genLoc)
        })

        event.add(InsertPath(id, 'blockstates/'), {
            'variants': {
                'facing=north,lit=false': { model: genLoc },
                'facing=north,lit=true': { model: genOnLoc },
                'facing=east,lit=false': { model: genLoc, y: 90 },
                'facing=east,lit=true': { model: genOnLoc, y: 90 },
                'facing=south,lit=false': { model: genLoc, y: 180 },
                'facing=south,lit=true': { model: genOnLoc, y: 180 },
                'facing=west,lit=false': { model: genLoc, y: 270 },
                'facing=west,lit=true': { model: genOnLoc, y: 270 }
            }
        })

        /*
        event.addBlockState(id, blockStateGen => {
            Object.keys(rotationMap).forEach(face => {
                blockStateGen.variant(`facing=${face},lit=false`, v => v.model(genLoc).y(rotationMap[face]))
                blockStateGen.variant(`facing=${face},lit=true`, v => v.model(genOnLoc).y(rotationMap[face]))
            })
        })
        */
    }

    let GeneratorModelBase = (id, lang, model) => {
        GeneratorModel(id, lang, model, null, null, model, null, null)
    }

    let GeneratorModelSideTop = (id, lang, sideModel, topModel) => {
        GeneratorModel(id, lang, sideModel, null, null, topModel, null, null)
    }

    let GeneratorModelSideTopFrame = (id, lang, sideModel, topModel, frameModel) => {
        GeneratorModel(id, lang, sideModel, null, null, topModel, null, frameModel)
    }

    let GeneratorModelSideFaceTopFrame = (id, lang, sideModel, faceModel, topModel, frameModel) => {
        GeneratorModel(id, lang, sideModel, faceModel, null, topModel, null, frameModel)
    }

    let UpgradeModel = (id, lang, baseModel, frameModel) => {
        event.addLang(`item.${id.replace(":", ".")}`, lang)
        event.addModel('item', id, model => {
            model.parent('generatorgalore:item/upgrade')
            model.texture('base', baseModel)
            if (frameModel) {
                model.texture('frame', frameModel)
            }
        })
    }

    // no touchy above this line


    GeneratorModelSideTopFrame('generatorgalore:8xnetherstar_generator', '8x Netherstar Generator', 'generatorgalore:block/netherstart_generator_side', 'generatorgalore:block/netherstart_generator_top', 'kubejs:block/gold_generator_frame')
    GeneratorModelSideTopFrame('generatorgalore:64xnetherstar_generator', '64x Netherstar Generator', 'generatorgalore:block/netherstart_generator_side', 'generatorgalore:block/netherstart_generator_top', 'kubejs:block/diamond_generator_frame')
    GeneratorModelSideFaceTopFrame('generatorgalore:8xculinary_generator', '8x Culinary Generator', 'generatorgalore:block/culinary_generator_side', 'generatorgalore:block/culinary_generator_front', 'generatorgalore:block/culinary_generator_top', 'kubejs:block/gold_generator_frame')
    GeneratorModelSideFaceTopFrame('generatorgalore:64xculinary_generator', '64x Culinary Generator', 'generatorgalore:block/culinary_generator_side', 'generatorgalore:block/culinary_generator_front', 'generatorgalore:block/culinary_generator_top', 'kubejs:block/diamond_generator_frame')

    UpgradeModel('generatorgalore:netherstar_to_8xnetherstar_upgrade', 'Netherite to 8x Netherstar Upgrade', 'generatorgalore:block/netherstart_generator_top', 'kubejs:item/gold_upgrade_frame')
    UpgradeModel('generatorgalore:8xnetherstar_to_64xnetherstar_upgrade', '8x Netherite to 64x Netherstar Upgrade', 'generatorgalore:block/netherstart_generator_top', 'kubejs:item/diamond_upgrade_frame')
    UpgradeModel('generatorgalore:culinary_to_8xculinary_upgrade', 'Culinary to 8x Culinary Upgrade', 'generatorgalore:block/culinary_generator_side', 'kubejs:item/gold_upgrade_frame')
    UpgradeModel('generatorgalore:8xculinary_to_64xculinary_upgrade', '8x Culinary to 64x Culinary Upgrade', 'generatorgalore:block/culinary_generator_side', 'kubejs:item/diamond_upgrade_frame')
    UpgradeModel('generatorgalore:iron_to_culinary_upgrade', 'Iron to Culinary Upgrade', 'generatorgalore:block/culinary_generator_side', null)
})
