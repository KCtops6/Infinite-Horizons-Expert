ServerEvents.recipes(event => {
    event.shapeless('kubejs:andesite_alloy_mixture', [
        '#minecraft:pickaxes', 'minecraft:andesite', 'minecraft:iron_ingot'
    ]).damageIngredient('#minecraft:pickaxes').id('kubejs:shapeless/kubejs/andesite_alloy_mixture');
    event.shapeless(Item.of('kubejs:andesite_alloy_mixture', 2), [
        '#minecraft:pickaxes', 'minecraft:andesite', 'infinite_resources:zinc_ingot'
    ]).damageIngredient('#minecraft:pickaxes').id('kubejs:shapeless/kubejs/andesite_alloy_mixture_from_zinc');
});