ServerEvents.recipes(event => {
    event.custom({
        type: "thermal:chiller",
        ingredient: {
            fluid: "kubejs:molten_hardened_glass",
            amount: 1000
        },
        result: [
            {
                item: "thermal:obsidian_glass"
            }
        ],
        energy: 10000
    });
});