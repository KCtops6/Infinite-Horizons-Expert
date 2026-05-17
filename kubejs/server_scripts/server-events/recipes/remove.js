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
});
