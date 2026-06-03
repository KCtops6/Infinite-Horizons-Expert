ServerEvents.recipes(event => {
    event.shapeless('kubejs:andesite_alloy_mixture', [
        '#infinite_horizons_tweaks:hammers', 'minecraft:andesite', 'minecraft:iron_ingot'
    ]).damageIngredient('#infinite_horizons_tweaks:hammers').id('kubejs:shapeless/kubejs/andesite_alloy_mixture');
    event.shapeless(Item.of('kubejs:andesite_alloy_mixture', 2), [
        '#infinite_horizons_tweaks:hammers', 'minecraft:andesite', 'infinite_resources:zinc_ingot'
    ]).damageIngredient('#infinite_horizons_tweaks:hammers').id('kubejs:shapeless/kubejs/andesite_alloy_mixture_from_zinc');
    event.shapeless(Item.of('create:crushed_raw_iron', 1), [
        '#infinite_horizons_tweaks:hammers', 'minecraft:raw_iron'
    ]).damageIngredient('#infinite_horizons_tweaks:hammers').id('kubejs:shapeless/create/crushed_raw_iron');
    event.shapeless(Item.of('minecraft:flint_and_steel', 1), [
        'infinite_resources:steel_ingot', 'minecraft:flint'
    ]).id('kubejs:shapeless/minecraft/flint_and_steel');
});