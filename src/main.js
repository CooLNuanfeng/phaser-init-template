// weapp-adapter 需最先引入
import './libs/weapp-adapter.js';

import Phaser from 'phaser';

import BootState from './js/states/BootState.js'
import PreloadState from './js/states/PreloadState.js'
import GameState from './js/states/GameState.js'

var game = new Phaser.Game({
    width: 375,
    height: 667,
    renderer: Phaser.CANVAS,
    canvas: canvas
});

game.state.add('boot', new BootState(game));
game.state.add('preload', new PreloadState(game));
game.state.add('game', new GameState(game));
game.state.start('boot');
