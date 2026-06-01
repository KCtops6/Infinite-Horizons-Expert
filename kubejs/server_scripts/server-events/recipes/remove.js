ServerEvents.recipes(event => {
    const BANNED_ITEMS = [
        /minecraft:.*_shovel/,
        /minecraft:.*_pickaxe/,
        /minecraft:.*_axe/,
        /minecraft:.*_hoe/,
        /minecraft:.*_sword/
    ];
    BANNED_ITEMS.forEach(item => {
        event.remove({ input: item });
        event.remove({ output: item });
    });
    let vanillaIngots = ['copper', 'iron', 'gold'];
    vanillaIngots.forEach(ingot => {  
        event.remove({ id: `create:pressing/${ingot}_ingot` });
    });
    let removedIDs = [
        'create:crafting/kinetics/millstone', 'create:crafting/materials/andesite_alloy',
        'create:crafting/materials/andesite_alloy_from_zinc'
    ];
    removedIDs.forEach(id => {
        event.remove({ id: id });
    });
});