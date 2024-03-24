Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "rahen-set", name: "Rahen Set"}, false);
	dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/dice-goblin/models/rahen/d20.glb",
		system: "rahen-set"
	});
});
