(function () {
  'use strict';

  var game = new Phaser.Game(480, 720, Phaser.CANVAS, 'mahou-mojo', {}, true);

  var music;
  var song;

  game.state.add('Boot', Mahou.Boot);
  game.state.add('Preloader', Mahou.Preloader);
  game.state.add('MainMenu', Mahou.MainMenu);
  game.state.add('SongSelect', Mahou.SongSelect);
  game.state.add('Game', Mahou.Game);
  game.state.add('GameOver', Mahou.GameOver);

  game.state.start('Boot');

})();
