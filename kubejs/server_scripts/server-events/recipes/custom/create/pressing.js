ServerEvents.recipes(event => {
    const pressing = (inputID, outputID) => {
        event.custom({
            type: "create:pressing",
            ingredients: [
                Ingredient.of(inputID).toJson()
            ],
            results: [
                Item.of(outputID).toJson()
            ]
        }).id(`kubejs:create/pressing/${outputID.replace(':', '/')}`);
    };
    let vanillaIngots = ['copper', 'iron', 'gold'];
    vanillaIngots.forEach(ingot => {  
        pressing(`minecraft:${ingot}_ingot`, `infinite_resources:${ingot}_plate`);
    });
});