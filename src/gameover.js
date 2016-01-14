Mahou.GameOver = function () {};

Mahou.GameOver.prototype = {
  init: function (highestCombo, score, misses, total) {
    highestCombo, score, misses, total = highestCombo, score, misses, total;
  },

  preload: function () {

  },

  create: function () {
    var playButton = this.game.add.button(160,320,"star",this.restart,this);
  },

  restart: function () {
    this.state.start('Game');
  }
};
