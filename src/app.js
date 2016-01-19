(function () {
  'use strict';

  var game = new Phaser.Game(480, 720, Phaser.CANVAS, '', {}, true, false);

  var music;
  var song;

  var stars;

  game.state.add('Boot', Mahou.Boot);
  game.state.add('Preloader', Mahou.Preloader);
  game.state.add('MainMenu', Mahou.MainMenu);
  game.state.add('Controls', Mahou.Controls);
  game.state.add('SongSelect', Mahou.SongSelect);
  game.state.add('Game', Mahou.Game);
  game.state.add('GameOver', Mahou.GameOver);

  game.state.start('Boot');

})();
