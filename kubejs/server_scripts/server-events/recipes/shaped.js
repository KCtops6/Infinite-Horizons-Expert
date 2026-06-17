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
    event.shaped(Item.of('minecraft:iron_pickaxe', 1), [
        'III',
        'HS ',
        ' S '
    ], {
        I: 'infinite_resources:iron_plate',
        S: 'minecraft:stick',
        H: '#infinite_horizons_tweaks:hammers'
    }).damageIngredient('#infinite_horizons_tweaks:hammers').id('kubejs:shaped/minecraft/iron_pickaxe');
    event.shaped(Item.of('minecraft:iron_axe', 1), [
        'II ',
        'IS ',
        'HS '
    ], {
        I: 'infinite_resources:iron_plate',
        S: 'minecraft:stick',
        H: '#infinite_horizons_tweaks:hammers'
    }).damageIngredient('#infinite_horizons_tweaks:hammers').id('kubejs:shaped/minecraft/iron_axe');
    event.shaped(Item.of('minecraft:iron_shovel', 1), [
        ' I ',
        'HS ',
        ' S '
    ], {
        I: 'infinite_resources:iron_plate',
        S: 'minecraft:stick',
        H: '#infinite_horizons_tweaks:hammers'
    }).damageIngredient('#infinite_horizons_tweaks:hammers').id('kubejs:shaped/minecraft/iron_shovel');
    event.shaped(Item.of('minecraft:iron_hoe', 1), [
        'II ',
        'HS ',
        ' S '
    ], {
        I: 'infinite_resources:iron_plate',
        S: 'minecraft:stick',
        H: '#infinite_horizons_tweaks:hammers'
    }).damageIngredient('#infinite_horizons_tweaks:hammers').id('kubejs:shaped/minecraft/iron_hoe');
    event.shaped(Item.of('minecraft:iron_sword', 1), [
        ' I ',
        ' I ',
        'HS '
    ], {
        I: 'infinite_resources:iron_plate',
        S: 'minecraft:stick',
        H: '#infinite_horizons_tweaks:hammers'
    }).damageIngredient('#infinite_horizons_tweaks:hammers').id('kubejs:shaped/minecraft/iron_sword');
    event.shaped(Item.of('minecraft:iron_helmet', 1), [
        'III',
        'IHI',
        '   '
    ], {
        I: 'infinite_resources:iron_plate',
        H: '#infinite_horizons_tweaks:hammers'
    }).damageIngredient('#infinite_horizons_tweaks:hammers').id('kubejs:shaped/minecraft/iron_helmet');
    event.shaped(Item.of('minecraft:iron_chestplate', 1), [
        'IHI',
        'III',
        'III'
    ], {
        I: 'infinite_resources:iron_plate',
        H: '#infinite_horizons_tweaks:hammers'
    }).damageIngredient('#infinite_horizons_tweaks:hammers').id('kubejs:shaped/minecraft/iron_chestplate');
    event.shaped(Item.of('minecraft:iron_leggings', 1), [
        'III',
        'IHI',
        'I I'
    ], {
        I: 'infinite_resources:iron_plate',
        H: '#infinite_horizons_tweaks:hammers'
    }).damageIngredient('#infinite_horizons_tweaks:hammers').id('kubejs:shaped/minecraft/iron_leggings');
    event.shaped(Item.of('minecraft:iron_boots', 1), [
        'I I',
        'IHI',
        '   '
    ], {
        I: 'infinite_resources:iron_plate',
        H: '#infinite_horizons_tweaks:hammers'
    }).damageIngredient('#infinite_horizons_tweaks:hammers').id('kubejs:shaped/minecraft/iron_boots');
    event.shaped(Item.of('minecraft:golden_pickaxe', 1), [
        'GGG',
        'HS ',
        ' S '
    ], {
        G: 'infinite_resources:gold_plate',
        S: 'minecraft:stick',
        H: '#infinite_horizons_tweaks:hammers'
    }).damageIngredient('#infinite_horizons_tweaks:hammers').id('kubejs:shaped/minecraft/golden_pickaxe');
    event.shaped(Item.of('minecraft:golden_axe', 1), [
        'GG ',
        'GS ',
        'HS '
    ], {
        G: 'infinite_resources:gold_plate',
        S: 'minecraft:stick',
        H: '#infinite_horizons_tweaks:hammers'
    }).damageIngredient('#infinite_horizons_tweaks:hammers').id('kubejs:shaped/minecraft/golden_axe');
    event.shaped(Item.of('minecraft:golden_shovel', 1), [
        ' G ',
        'HS ',
        ' S '
    ], {
        G: 'infinite_resources:gold_plate',
        S: 'minecraft:stick',
        H: '#infinite_horizons_tweaks:hammers'
    }).damageIngredient('#infinite_horizons_tweaks:hammers').id('kubejs:shaped/minecraft/golden_shovel');
    event.shaped(Item.of('minecraft:golden_hoe', 1), [
        'GG ',
        'HS ',
        ' S '
    ], {
        G: 'infinite_resources:gold_plate',
        S: 'minecraft:stick',
        H: '#infinite_horizons_tweaks:hammers'
    }).damageIngredient('#infinite_horizons_tweaks:hammers').id('kubejs:shaped/minecraft/golden_hoe');
    event.shaped(Item.of('minecraft:golden_sword', 1), [
        ' G ',
        ' G ',
        'HS '
    ], {
        G: 'infinite_resources:gold_plate',
        S: 'minecraft:stick',
        H: '#infinite_horizons_tweaks:hammers'
    }).damageIngredient('#infinite_horizons_tweaks:hammers').id('kubejs:shaped/minecraft/golden_sword');
    event.shaped(Item.of('minecraft:golden_helmet', 1), [
        'GGG',
        'GHG',
        '   '
    ], {
        G: 'infinite_resources:gold_plate',
        H: '#infinite_horizons_tweaks:hammers'
    }).damageIngredient('#infinite_horizons_tweaks:hammers').id('kubejs:shaped/minecraft/golden_helmet');
    event.shaped(Item.of('minecraft:golden_chestplate', 1), [
        'GHG',
        'GGG',
        'GGG'
    ], {
        G: 'infinite_resources:gold_plate',
        H: '#infinite_horizons_tweaks:hammers'
    }).damageIngredient('#infinite_horizons_tweaks:hammers').id('kubejs:shaped/minecraft/golden_chestplate');
    event.shaped(Item.of('minecraft:golden_leggings', 1), [
        'GGG',
        'GHG',
        'G G'
    ], {
        G: 'infinite_resources:gold_plate',
        H: '#infinite_horizons_tweaks:hammers'
    }).damageIngredient('#infinite_horizons_tweaks:hammers').id('kubejs:shaped/minecraft/golden_leggings');
    event.shaped(Item.of('minecraft:golden_boots', 1), [
        'G G',
        'GHG',
        '   '
    ], {
        G: 'infinite_resources:gold_plate',
        H: '#infinite_horizons_tweaks:hammers'
    }).damageIngredient('#infinite_horizons_tweaks:hammers').id('kubejs:shaped/minecraft/golden_boots');
});