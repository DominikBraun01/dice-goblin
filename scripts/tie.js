Hooks.on("init", () => {
	CONFIG.fontDefinitions["Tie"] = {
		editor: true,
		fonts: [{ urls: ["modules/dice-goblin/font/tie-Regular.woff2"] }]
	};
});

Hooks.on('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({ id: "preset-tie", name: "Tie" }, false);
	dice3d.addDicePreset({
		type: "d2",
		font: "Tie",
		fontScale: "1.3",
		labels: ['c', 'b'],
		system: "preset-tie",
	});
	dice3d.addDicePreset({
		type: "d4",
		font: "Tie",
		fontScale: "1.1",
		labels: ['1', '2', '3', '4'],
		system: "preset-tie",
	});
	dice3d.addDicePreset({
		type: "d6",
		font: "Tie",
		fontScale: "1.3",
		labels: ['1', '2', '3', '4', '5', '6'],
		system: "preset-tie",
	});
	dice3d.addDicePreset({
		type: "df",
		font: "Tie",
		fontScale: "1.7",
		labels: ['-', '', '+'],
		system: "preset-tie",
	});
	dice3d.addDicePreset({
		type: "d8",
		font: "Tie",
		fontScale: "0.9",
		labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
		system: "preset-tie",
	});
	dice3d.addDicePreset({
		type: "d10",
		font: "Tie",
		fontScale: "1.0",
		labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
		system: "preset-tie",
	});
	dice3d.addDicePreset({
		type: "d100",
		font: "Tie",
		fontScale: "0.9",
		labels: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '00'],
		system: "preset-tie",
	});
	dice3d.addDicePreset({
		type: "d12",
		font: "Tie",
		fontScale: "1.2",
		labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
		system: "preset-tie",
	});
	dice3d.addDicePreset({
		type: "d20",
		font: "Tie",
		fontScale: "1.0",
		labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', 'a'],
		system: "preset-tie",
	});
});