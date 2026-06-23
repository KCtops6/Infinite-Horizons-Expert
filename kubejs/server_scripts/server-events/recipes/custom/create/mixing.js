ServerEvents.recipes(event => {
    event.custom({
        type: "create:mixing",
        heatRequirement: "heated",
        ingredients: [
            {
                tag: "forge:dusts/quartz",
                count: 1
            },
            {
                tag: "forge:dusts/obsidian",
                count: 1
            },
            {
                tag: "forge:sand",
                count: 1
            }
        ],
        results: [
            {
                amount: 1000,
                fluid: "kubejs:molten_hardened_glass"
            }
        ]
    }).id('kubejs/create/mixing/kubejs/molten_hardened_glass');
});