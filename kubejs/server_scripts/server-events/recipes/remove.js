ServerEvents.recipes(event => {
    const BANNED_ITEMS = [
        'minecraft:wooden_shovel', 
        'minecraft:wooden_pickaxe', 
        'minecraft:wooden_axe',
        'minecraft:wooden_hoe'
    ];

    BANNED_ITEMS.forEach(item => {
        event.remove({ input: item });
        event.remove({ output: item });
    });
});
