(function () {
  'use strict';

  var game = new Phaser.Game(480, 720, Phaser.AUTO, 'mahou-mojo', {}, true);

  game.state.add('Boot', Mahou.Boot);
  game.state.add('Preloader', Mahou.Preloader);
  game.state.add('Game', Mahou.Game);

  game.state.start('Boot');

})();
