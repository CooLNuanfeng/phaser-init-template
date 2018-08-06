import Phaser from 'phaser';

export default class GameState extends Phaser.State {

	constructor(game) {
		super();
		this.game = game;
	}

	create() {
		{{unless init}}
		// this is very important
		this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

		this.game.state.start('preload');
		{{/unless}}
	}

}
