ServerEvents.recipes(event => {
    event.blasting('create:andesite_alloy', 'kubejs:andesite_alloy_mixture')
        .id('kubejs:blasting/kubejs/andesite_alloy_from_mixture');
});