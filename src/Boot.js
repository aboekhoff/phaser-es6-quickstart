export default class Boot {
	preload() {
	}

	create() {
		console.log('boot');
		this.game.state.start('preload');
	}

}