ServerEvents.recipes(event => {
  event.forEachRecipe(
    {
      type: 'mekanism:dissolution',
    },
    r => {
      let multiplier = 2
      
      let output = r.json.get("output")
      let chemicalType = output.get("chemicalType").toString().replace('"', '')
      let slurry = output.get("slurry")
      let slurryId = slurry != null ? slurry.toString().replace('"', '') : null
      if(chemicalType == "slurry" && slurryId && slurryId.contains("dirty")) {
        output.add("amount", output.get("amount") * multiplier)
      }
    }
  )
})
