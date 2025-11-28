import Model from './demo/model.js';
import View from './demo/view.js';
import Controller from './demo/controller.js';

const game = new Controller(Model, View);
game.start();
