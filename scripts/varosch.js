Hooks.on("init", () => {
	CONFIG.fontDefinitions["Varosch"] = {
		editor: true,
		fonts: [{ urls: ["modules/dice-goblin/font/varosch-Regular.woff2"] }]
	};
});

Hooks.on('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({ id: "preset-varosch", name: "Varosch" }, false);
	dice3d.addDicePreset({
		type: "d2",
		font: "Varosch",
		fontScale: "1.5",
		labels: ['c', 'b'],
		system: "preset-varosch",
	});
	dice3d.addDicePreset({
		type: "d4",
		font: "Varosch",
		fontScale: "1.0",
		labels: ['1', '2', '3', '4'],
		system: "preset-varosch",
	});
	dice3d.addDicePreset({
		type: "d6",
		font: "Varosch",
		fontScale: "1.3",
		labels: ['1', '2', '3', '4', '5', '6'],
		system: "preset-varosch",
	});
	dice3d.addDicePreset({
		type: "df",
		font: "Varosch",
		fontScale: "2.2",
		labels: ['-', '', '+'],
		system: "preset-varosch",
	});
	dice3d.addDicePreset({
		type: "d8",
		font: "Varosch",
		fontScale: "0.9",
		labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
		system: "preset-varosch",
	});
	dice3d.addDicePreset({
		type: "d10",
		font: "Varosch",
		fontScale: "0.9",
		labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
		system: "preset-varosch",
	});
	dice3d.addDicePreset({
		type: "d100",
		font: "Varosch",
		fontScale: "0.9",
		labels: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '00'],
		system: "preset-varosch",
	});
	dice3d.addDicePreset({
		type: "d12",
		font: "Varosch",
		fontScale: "1.1",
		labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
		system: "preset-varosch",
	});
	dice3d.addDicePreset({
		type: "d20",
		font: "Varosch",
		fontScale: "1.1",
		labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', 'a'],
		system: "preset-varosch",
	});
});