ServerEvents.recipes(event => {
    const BANNED_TOOLS = [
        /minecraft:.*_(shovel|pickaxe|axe|hoe|sword)/
    ];
    BANNED_TOOLS.forEach(item => {
        event.remove({ input: item });
        event.remove({ output: item });
    });
    let vanillaIngots = ['copper', 'iron', 'gold'];
    vanillaIngots.forEach(ingot => {  
        event.remove({ id: `create:pressing/${ingot}_ingot` });
    });
    let removedIDs = [
        'create:crafting/kinetics/millstone', 
        'create:crafting/materials/andesite_alloy',
        'create:crafting/materials/andesite_alloy_from_zinc',
        'minecraft:flint_and_steel'
    ];
    removedIDs.forEach(id => {
        event.remove({ id: id });
    });
    const materials = ['iron', 'golden'];
    const armorPieces = ['helmet', 'chestplate', 'leggings', 'boots'];
    materials.forEach(mat => {
        armorPieces.forEach(armor => {
            event.remove({ id: `minecraft:${mat}_${armor}` });
        });
    });
});