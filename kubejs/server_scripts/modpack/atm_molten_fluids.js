/*
    Authored by Mitchell52
    for AllTheMods 8
*/

ServerEvents.recipes(e=>{
  let ATM_metal = ['allthemodium','unobtainium','vibranium',]
  ATM_metal.forEach(ATM_metal =>
  e.custom({
    "type": "thermal:crucible",
    "ingredient": {
      "item": `allthemodium:${ATM_metal}_block`
    },
    "result": [
      {
      "fluid": `allthemodium:molten_${ATM_metal}`,
      "amount": 1000
      }
    ],
    "energy": 232000
  }).id(`kubejs:molten_${ATM_metal}`)
  )
  ATM_metal.forEach(ATM_metal =>
  e.custom({
    "type": "thermal:chiller",
    "ingredients": [
      {
        "fluid": `allthemodium:molten_${ATM_metal}`,
        "amount": 1000
      }
    ],
    "result": [
      {
        "item": `allthemodium:${ATM_metal}_block`
      }
    ],
    "energy": 232000
  }).id(`kubejs:chilling_${ATM_metal}`)
  )
})