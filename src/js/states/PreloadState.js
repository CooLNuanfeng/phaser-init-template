import Phaser from 'phaser';
import Common from 'assets/atlas/common.js'

export default class GameState extends Phaser.State {

    constructor(game) {
        super();
        this.game = game;
    }

    preload() {
        this.game.load.image('bg', 'assets/images/bg.jpg');
        this.game.load.image('hero', 'assets/images/hero.png');
        this.game.load.image('enemy', 'assets/images/enemy.png');
        this.game.load.spritesheet('explosion', 'assets/images/explosion.png', 47, 64, 19);
        this.game.load.image('bullet', 'assets/images/bullet.png');
        this.game.load.atlas('common', 'assets/images/common.png', null, Common);

        this.game.load.audio('bgm', 'assets/media/bgm.mp3');
        this.game.load.audio('boom', 'assets/media/boom.mp3');
        this.game.load.audio('bullet', 'assets/media/bullet.mp3');
    }

    create() {
        // invalid sound lock
        this.game.sound.touchLocked = false;

        this.game.state.start('game');
    }

}
