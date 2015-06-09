export default class Preload {
	preload() {

	}

	create() {
		console.log('preload');
		this.game.state.start('intro');
	}
}