ServerEvents.recipes(event => {
    event.shaped(Item.of('create:millstone'), [
        ' C ',
        'GSG',
        'PIP'
    ], {
        C: 'create:cogwheel',
        G: 'minecraft:grindstone',
        S: 'create:andesite_casing',
        P: 'infinite_resources:iron_plate',
        I: 'minecraft:smooth_stone'
    }).id('kubejs:shaped/create/millstone');
});