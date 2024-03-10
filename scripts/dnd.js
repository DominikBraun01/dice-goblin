Hooks.on("init", () => {
	CONFIG.fontDefinitions["DnD"] = {
		editor: true,
		fonts: [{ urls: ["modules/dice-goblin/font/dnd-Regular.woff2"] }]
	};
});

Hooks.on('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({ id: "preset-dnd", name: "DnD" }, false);
	dice3d.addDicePreset({
		type: "d2",
		font: "DnD",
		fontScale: "1.3",
		labels: ['c', 'b'],
		system: "preset-dnd",
	});
	dice3d.addDicePreset({
		type: "d4",
		font: "DnD",
		fontScale: "1.1",
		labels: ['1', '2', '3', '4'],
		system: "preset-dnd",
	});
	dice3d.addDicePreset({
		type: "d6",
		font: "DnD",
		fontScale: "1.3",
		labels: ['1', '2', '3', '4', '5', '6'],
		system: "preset-dnd",
	});
	dice3d.addDicePreset({
		type: "df",
		font: "DnD",
		fontScale: "1.7",
		labels: ['-', '', '+'],
		system: "preset-dnd",
	});
	dice3d.addDicePreset({
		type: "d8",
		font: "DnD",
		fontScale: "0.9",
		labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
		system: "preset-dnd",
	});
	dice3d.addDicePreset({
		type: "d10",
		font: "DnD",
		fontScale: "1.0",
		labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
		system: "preset-dnd",
	});
	dice3d.addDicePreset({
		type: "d100",
		font: "DnD",
		fontScale: "0.9",
		labels: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '00'],
		system: "preset-dnd",
	});
	dice3d.addDicePreset({
		type: "d12",
		font: "DnD",
		fontScale: "1.2",
		labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
		system: "preset-dnd",
	});
	dice3d.addDicePreset({
		type: "d20",
		font: "DnD",
		fontScale: "1.0",
		labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', 'a'],
		system: "preset-dnd",
	});
});