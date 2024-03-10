Hooks.on('diceSoNiceReady', (dice3d) => {
   dice3d.addTexture(".", {
      name: "-------------------------",
      composite: "",
      source: "",
      bump: ""
   });
   dice3d.addTexture("amethyst", {
      name: "Amethyst",
      composite: "multiply",
      source: "modules/dice-goblin/textures/amethyst.webp",
      bump: "modules/dice-goblin/textures/amethyst-bump.webp"
   });
   dice3d.addTexture("bark", {
      name: "Bark",
      composite: "overlay",
      source: "modules/dice-goblin/textures/bark.webp",
      bump: "modules/dice-goblin/textures/bark-bump.webp"
   });
   dice3d.addTexture("bricks", {
      name: "Bricks",
      composite: "overlay",
      source: "modules/dice-goblin/textures/bricks.webp",
      bump: "modules/dice-goblin/textures/bricks-bump.webp"
   });
   dice3d.addTexture("brimstone", {
      name: "Brimstone",
      composite: "multiply",
      source: "modules/dice-goblin/textures/brimstone.webp",
      bump: "modules/dice-goblin/textures/brimstone-bump.webp"
   });
   dice3d.addTexture("gears", {
      name: "Gears",
      composite: "multiply",
      source: "modules/dice-goblin/textures/gears.webp",
      bump: "modules/dice-goblin/textures/gears-bump.webp"
   });
   dice3d.addTexture("goldenbranch", {
      name: "Golden Branches",
      composite: "multiply",
      source: "modules/dice-goblin/textures/goldenbranches.webp",
      bump: "modules/dice-goblin/textures/goldenbranches.webp"
   });
   dice3d.addTexture("hexagon", {
      name: "Hexagon",
      composite: "overlay",
      source: "modules/dice-goblin/textures/hexagon.webp",
      bump: "modules/dice-goblin/textures/hexagon-bump.webp",
   });
   dice3d.addTexture("leafage", {
      name: "Leafage",
      composite: "multiply",
      source: "modules/dice-goblin/textures/leafage.webp",
      bump: "modules/dice-goblin/textures/leafage.webp"
   });
   dice3d.addTexture("leather", {
      name: "Leather",
      composite: "overlay",
      source: "modules/dice-goblin/textures/leather.webp",
      bump: "modules/dice-goblin/textures/leather-bump.webp"
   });
   dice3d.addTexture("darkmarble", {
      name: "Dark Marble",
      composite: "screen",
      source: "modules/dice-goblin/textures/marble.webp",
      bump: "modules/dice-goblin/textures/marble-bump.webp"
   });
   dice3d.addTexture("metalfence", {
      name: "Metal Fence (Transparent)",
      composite: "destination-in",
      source: "modules/dice-goblin/textures/metalsheet-opacity.webp",
      bump: "modules/dice-goblin/textures/metalsheet-bump.webp"
   });
   dice3d.addTexture("roughmetal", {
      name: "Rough Metal",
      composite: "multiply",
      source: "modules/dice-goblin/textures/roughmetal.webp",
      bump: "modules/dice-goblin/textures/roughmetal.webp"
   });
   dice3d.addTexture("roughstone", {
      name: "Rough Stone",
      composite: "multiply",
      source: "modules/dice-goblin/textures/stone.webp",
      bump: "modules/dice-goblin/textures/stone-bump.webp"
   });
   dice3d.addTexture("stonetiles", {
      name: "Stone Tiles",
      composite: "overlay",
      source: "modules/dice-goblin/textures/stonetiles.webp",
      bump: "modules/dice-goblin/textures/stonetiles-bump.webp"
   });
});

//destination-in
