const $TierSortingRegistry = Java.loadClass('net.minecraftforge.common.TierSortingRegistry')
const $Tiers = Java.loadClass('net.minecraft.world.item.Tiers')

// botania & aiot
const $BotaniaAPI = Java.loadClass('vazkii.botania.api.BotaniaAPI')
const $AIOTBotaniaTiers = Java.loadClass('de.melanx.aiotbotania.items.ItemTiers')
// ae2
const $FluixToolType = Java.loadClass('appeng.items.tools.fluix.FluixToolType')
const $QuartzToolType = Java.loadClass('appeng.items.tools.quartz.QuartzToolType')
// mystical agriculture
const $MAItemTier = Java.loadClass('com.blakebr0.mysticalagriculture.lib.ModItemTier')
// occultism
const $OccultismItemTier = Java.loadClass('com.github.klikli_dev.occultism.api.common.misc.OccultismItemTier')
// spirit
const $SpiritItemTier = Java.loadClass('me.codexadrian.spirit.items.SoulMetalMaterial')
// ie
const $IEItemTier = Java.loadClass('blusunrize.immersiveengineering.api.Lib')
// redstone arsenal
const $RSAItemTier = Java.loadClass('cofh.redstonearsenal.init.RSAItems')

StartupEvents.postInit(event => {
  let botaniaInstance = $BotaniaAPI.instance()
  let Manasteel = botaniaInstance.getManasteelItemTier()
  if (!$TierSortingRegistry.isTierSorted(Manasteel)) {
    $TierSortingRegistry.registerTier(Manasteel, "botania:manasteel", [$Tiers.IRON], [$Tiers.DIAMOND])
  }
  let Elementium = botaniaInstance.getElementiumItemTier()
  if (!$TierSortingRegistry.isTierSorted(Elementium)) {
    $TierSortingRegistry.registerTier(Elementium, "botania:elementium", [Manasteel], [$Tiers.DIAMOND])
  }
  let Terrasteel = botaniaInstance.getTerrasteelItemTier()
  if (!$TierSortingRegistry.isTierSorted(Terrasteel)) {
    $TierSortingRegistry.registerTier(Terrasteel, "botania:terrasteel", [$Tiers.DIAMOND], [$Tiers.NETHERITE])
  }
  let LivingWood = $AIOTBotaniaTiers.LIVINGWOOD_ITEM_TIER
  if (!$TierSortingRegistry.isTierSorted(LivingWood)) {
    $TierSortingRegistry.registerTier(LivingWood, "aiotbotania:livingwood", [$Tiers.WOOD], [$Tiers.STONE])
  }
  let LivingRock = $AIOTBotaniaTiers.LIVINGROCK_ITEM_TIER
  if (!$TierSortingRegistry.isTierSorted(LivingRock)) {
    $TierSortingRegistry.registerTier(LivingRock, "aiotbotania:livingrock", [$Tiers.STONE], [$Tiers.IRON])
  }

  let Certus = $QuartzToolType.CERTUS.getToolTier()
  if (!$TierSortingRegistry.isTierSorted(Certus)) {
    $TierSortingRegistry.registerTier(Certus, "ae2:certus_quartz", [$Tiers.IRON], [$Tiers.DIAMOND])
  }
  let Nether = $QuartzToolType.NETHER.getToolTier()
  if (!$TierSortingRegistry.isTierSorted(Nether)) {
    $TierSortingRegistry.registerTier(Nether, "ae2:nether_quartz", [Certus], [$Tiers.DIAMOND])
  }
  let Fluix = $FluixToolType.FLUIX.getToolTier()
  if (!$TierSortingRegistry.isTierSorted(Fluix)) {
    $TierSortingRegistry.registerTier(Fluix, "ae2:fluix", [Nether, Certus], [$Tiers.DIAMOND])
  }

  let Awakened = $MAItemTier.AWAKENED_SUPREMIUM
  if (!$TierSortingRegistry.isTierSorted(Awakened)) {
    $TierSortingRegistry.registerTier(Awakened, "mysticalagriculture:awakened_supremium", [$MAItemTier.SUPREMIUM], [])
  }

  let SpiritAttunedGem = $OccultismItemTier.SPIRIT_ATTUNED_GEM
  if (!$TierSortingRegistry.isTierSorted(SpiritAttunedGem)) {
    $TierSortingRegistry.registerTier(SpiritAttunedGem, "occultism:spirit_attuned_gem", [$Tiers.IRON], [$Tiers.DIAMOND])
  }

  let SoulMetal = $SpiritItemTier.INSTANCE
  if (!$TierSortingRegistry.isTierSorted(SoulMetal)) {
    $TierSortingRegistry.registerTier(SoulMetal, "spirit:soul_metal", [$Tiers.DIAMOND], [$Tiers.NETHERITE])
  }

  let IESteel = $IEItemTier.MATERIAL_Steel
  if (!$TierSortingRegistry.isTierSorted(IESteel)) {
    $TierSortingRegistry.registerTier(IESteel, "immersiveengineering:steel", [$Tiers.IRON], [$Tiers.DIAMOND])
  }

  let FluxMetal = $RSAItemTier.MATERIAL_FLUX_METAL
  if (!$TierSortingRegistry.isTierSorted(FluxMetal)) {
    $TierSortingRegistry.registerTier(FluxMetal, "redstone_arsenal:flux_metal", [$Tiers.NETHERITE], [])
  }
})