ClientEvents.highPriorityAssets(event => {
    const rotationMap = {
        "north":0,
        "east":90,
        "south":180,
        "west":270
    }

    const generateSet = (id, lang, parentModel => {
        let rlID = Utils.id(id)
        let genLoc = `${rlID.getNamespace}:block/${rlID.getPath}`
        let genOnLoc = `${rlID.getNamespace}:block/${rlID.getPath}_on`

        event.addLang(`block.${id.replace(":",".")}`, lang)

        event.addModel('block', id, model => {
            model.parent('generatorgalore:block/generator')
            model.texture('top', parentModel)
            model.texture('side', parentModel)
        })
        event.addModel('block', `${id}_on`, model => {
            model.parent(genLoc)
            model.texture('front', 'generatorgalore:block/generator_on')
        })
        event.addModel('item', id, model => {
            model.parent(genLoc)
        })

        event.addBlockState(id, blockState => {
            Object.keys(rotationMap).forEach(facing => {
                blockState.variant(`facing=${facing}, lit=false`, variant => {
                    variant.model(genLoc).y(rotationMap[facing])
                })
                blockState.variant(`facing=${facing}, lit=true`, variant => {
                    variant.model(genOnLoc).y(rotationMap[facing])
                })
            })
        })
    })

    // no touchy above this line
    
    generateSet('generatorgalore:8xnetherstar_generator', 'Nether Star Generator', 'allthetweaks:block/nether_star_block')
})