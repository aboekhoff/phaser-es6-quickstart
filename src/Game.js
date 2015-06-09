let create = () => {
	let style = { FONT: "32px monospace", fill: "#fff"};
	game.add.text(200, 200, "Badass Phaser ES6", style);
}

let game = new Phaser.Game(
	640, 
	480,
	Phaser.AUTO,
	null,
	{create}
)