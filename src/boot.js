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

    //  Here we load the assets required for our preloader (in this case a background and a loading bar)
    // this.load.image('preloaderBackground', 'images/preloader_background.jpg');
    // this.load.image('preloaderBar', 'images/preloadr_bar.png');
    this.load.image('loadingBar', 'assets/images/star.png');
  },

  create: function () {
    this.state.start('Preloader');
  }

};
