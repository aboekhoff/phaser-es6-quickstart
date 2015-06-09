export default class Intro {
	preload() {
	}

	create() {
		console.log('intro');
		let style = { font: "32px monospace", fill: "#fff"};
		this.game.add.text(230, 200, 'Phaser ES6', style);
	}

}