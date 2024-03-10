Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "varosch-set", name: "Varosch Set"}, false);
	dice3d.addDicePreset({
		type: "d2",
		labels: "",
		modelFile: "modules/dice-goblin/models/varosch/d2.glb",
		system: "varosch-set"
	});
	dice3d.addDicePreset({
		type: "d4",
		labels: "",
		modelFile: "modules/dice-goblin/models/varosch/d4.glb",
		system: "varosch-set"
	});
	dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/dice-goblin/models/varosch/d6.glb",
		system: "varosch-set"
	});
	dice3d.addDicePreset({
		type: "d8",
		labels: "",
		modelFile: "modules/dice-goblin/models/varosch/d8.glb",
		system: "varosch-set"
	});
	dice3d.addDicePreset({
		type: "d10",
		labels: "",
		modelFile: "modules/dice-goblin/models/varosch/d10.glb",
		system: "varosch-set"
	});
	dice3d.addDicePreset({
		type: "d12",
		labels: "",
		modelFile: "modules/dice-goblin/models/varosch/d12.glb",
		system: "varosch-set"
	});
	dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/dice-goblin/models/varosch/d20.glb",
		system: "varosch-set"
	});
	dice3d.addDicePreset({
		type: "d100",
		labels: "",
		modelFile: "modules/dice-goblin/models/varosch/d100.glb",
		system: "varosch-set"
	});
});
