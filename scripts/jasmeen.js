Hooks.on("init", () => {
	CONFIG.fontDefinitions["Jasmeen"] = {
		editor: true,
		fonts: [{ urls: ["modules/dice-goblin/font/jasmeen-Regular.woff2"] }]
	};
});

Hooks.on('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({ id: "preset-jasmeen", name: "Jasmeen" }, false);
	dice3d.addDicePreset({
		type: "d2",
		font: "Jasmeen",
		fontScale: "1.4",
		labels: ['c', 'b'],
		system: "preset-jasmeen",
	});
	dice3d.addDicePreset({
		type: "d4",
		font: "Jasmeen",
		fontScale: "1.0",
		labels: ['1', '2', '3', '4'],
		system: "preset-jasmeen",
	});
	dice3d.addDicePreset({
		type: "d6",
		font: "Jasmeen",
		fontScale: "1.4",
		labels: ['1', '2', '3', '4', '5', '6'],
		system: "preset-jasmeen",
	});
	dice3d.addDicePreset({
		type: "df",
		font: "Jasmeen",
		fontScale: "2.2",
		labels: ['-', '', '+'],
		system: "preset-jasmeen",
	});
	dice3d.addDicePreset({
		type: "d8",
		font: "Jasmeen",
		fontScale: "0.9",
		labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
		system: "preset-jasmeen",
	});
	dice3d.addDicePreset({
		type: "d10",
		font: "Jasmeen",
		fontScale: "1.0",
		labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
		system: "preset-jasmeen",
	});
	dice3d.addDicePreset({
		type: "d100",
		font: "Jasmeen",
		fontScale: "0.8",
		labels: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '00'],
		system: "preset-jasmeen",
	});
	dice3d.addDicePreset({
		type: "d12",
		font: "Jasmeen",
		fontScale: "1.1",
		labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
		system: "preset-jasmeen",
	});
	dice3d.addDicePreset({
		type: "d20",
		font: "Jasmeen",
		fontScale: "1.0",
		labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', 'a'],
		system: "preset-jasmeen",
	});
});