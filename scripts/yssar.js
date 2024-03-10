Hooks.on("init", () => {
	CONFIG.fontDefinitions["Yssar"] = {
		editor: true,
		fonts: [{ urls: ["modules/dice-goblin/font/yssar-Regular.woff2"] }]
	};
});

Hooks.on('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({ id: "preset-yssar", name: "Yssar" }, false);
	dice3d.addDicePreset({
		type: "d2",
		font: "Yssar",
		fontScale: "1.3",
		labels: ['c', 'b'],
		system: "preset-yssar",
	});
	dice3d.addDicePreset({
		type: "d4",
		font: "Yssar",
		fontScale: "0.9",
		labels: ['1', '2', '3', '4'],
		system: "preset-yssar",
	});
	dice3d.addDicePreset({
		type: "d6",
		font: "Yssar",
		fontScale: "1.2",
		labels: ['1', '2', '3', '4', '5', '6'],
		system: "preset-yssar",
	});
	dice3d.addDicePreset({
		type: "df",
		font: "Yssar",
		fontScale: "1.8",
		labels: ['-', '', '+'],
		system: "preset-yssar",
	});
	dice3d.addDicePreset({
		type: "d8",
		font: "Yssar",
		fontScale: "0.8",
		labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
		system: "preset-yssar",
	});
	dice3d.addDicePreset({
		type: "d10",
		font: "Yssar",
		fontScale: "0.9",
		labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
		system: "preset-yssar",
	});
	dice3d.addDicePreset({
		type: "d100",
		font: "Yssar",
		fontScale: "0.8",
		labels: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '00'],
		system: "preset-yssar",
	});
	dice3d.addDicePreset({
		type: "d12",
		font: "Yssar",
		fontScale: "1.1",
		labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
		system: "preset-yssar",
	});
	dice3d.addDicePreset({
		type: "d20",
		font: "Yssar",
		fontScale: "1.0",
		labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', 'a'],
		system: "preset-yssar",
	});
});