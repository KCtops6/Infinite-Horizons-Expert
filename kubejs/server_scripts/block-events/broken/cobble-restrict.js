const STAGE_ID = "can_mine_cobble";

const VILLAGE_STONE_BLOCKS = [
    'minecraft:cobblestone',
    'minecraft:cobblestone_stairs',
    'minecraft:cobblestone_slab',
    'minecraft:cobblestone_wall',
    'minecraft:mossy_cobblestone',
    'minecraft:mossy_cobblestone_stairs',
    'minecraft:mossy_cobblestone_slab',
    'minecraft:stone_stairs',
    'minecraft:stone_slab',
    'minecraft:smooth_stone',
    'minecraft:smooth_stone_slab'
];

BlockEvents.broken(event => {
    const { block, player } = event;
    if (!player) return;

    if (VILLAGE_STONE_BLOCKS.includes(block.id) && !player.stages.has(STAGE_ID)) {
        event.player.tell(`§4§l[Locked] §cYou cannot mine this block yet! Complete the §e"First Cobblestone" §cquest in the §bAlpha §cchapter first.`);
        event.cancel();
    }
});