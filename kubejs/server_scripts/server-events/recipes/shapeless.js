ServerEvents.recipes(event => {
    event.shapeless('kubejs:andesite_alloy_mixture', [
        '#infinite_horizons_tweaks:hammers', 'minecraft:andesite', 'minecraft:iron_ingot'
    ]).damageIngredient('#infinite_horizons_tweaks:hammers').id('kubejs:shapeless/kubejs/andesite_alloy_mixture');
    event.shapeless(Item.of('kubejs:andesite_alloy_mixture', 2), [
        '#infinite_horizons_tweaks:hammers', 'minecraft:andesite', 'infinite_resources:zinc_ingot'
    ]).damageIngredient('#infinite_horizons_tweaks:hammers').id('kubejs:shapeless/kubejs/andesite_alloy_mixture_from_zinc');
});