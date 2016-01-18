var Mahou = Mahou || {};

Mahou.Boot = function () {};

Mahou.Boot.prototype = {

  init: function () {
    // no multi-touch
    this.input.maxPointers = 1;

    // scale with viewport size, show full game area
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  },

  preload: function () {
    this.load.image('loadingBar', 'assets/images/star.png');
  },

  create: function () {
    this.state.start('Preloader');
  }

};
