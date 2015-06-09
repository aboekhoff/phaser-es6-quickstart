let game = new Phaser.Game(640, 480, Phaser.AUTO);

import Boot from './Boot'
import Preload from './Preload'
import Intro from './Intro'

game.state.add('boot', Boot);
game.state.add('preload', Preload);
game.state.add('intro', Intro);
game.state.start('boot');