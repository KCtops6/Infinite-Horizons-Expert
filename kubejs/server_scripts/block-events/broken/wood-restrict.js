const STAGE_ID = "can_mine_wood";

const VILLAGE_WOOD_BLOCKS = [
    'minecraft:oak_log',
    'minecraft:spruce_log',
    'minecraft:acacia_log',
    'minecraft:dark_oak_log',
    'minecraft:oak_wood',
    'minecraft:spruce_wood',
    'minecraft:acacia_wood',
    'minecraft:dark_oak_wood',
    'minecraft:oak_planks',
    'minecraft:spruce_planks',
    'minecraft:acacia_planks',
    'minecraft:dark_oak_planks',
    'minecraft:oak_stairs',
    'minecraft:spruce_stairs',
    'minecraft:acacia_stairs',
    'minecraft:dark_oak_stairs',
    'minecraft:oak_slab',
    'minecraft:spruce_slab',
    'minecraft:acacia_slab',
    'minecraft:dark_oak_slab',
    'minecraft:oak_fence',
    'minecraft:spruce_fence',
    'minecraft:acacia_fence',
    'minecraft:dark_oak_fence',
    'minecraft:oak_fence_gate',
    'minecraft:spruce_fence_gate',
    'minecraft:acacia_fence_gate',
    'minecraft:dark_oak_fence_gate',
    'minecraft:oak_door',
    'minecraft:spruce_door',
    'minecraft:acacia_door',
    'minecraft:dark_oak_door',
    'minecraft:oak_trapdoor',
    'minecraft:spruce_trapdoor',
    'minecraft:acacia_trapdoor',
    'minecraft:dark_oak_trapdoor'
];

BlockEvents.broken(event => {
    const { block, player } = event;
    if (!player) return;

    if (VILLAGE_WOOD_BLOCKS.includes(block.id) && !player.stages.has(STAGE_ID)) {
        event.player.tell(`§4§l[Locked] §cYou cannot mine this block yet! Complete the §e"Obtain a Stone or Iron Axe" §cquest in the §bAlpha §cchapter first.`);
        event.cancel();
    }
});