var Mahou = Mahou || {};


Mahou.Preloader = function (game) {
  // this.loadingBar = null;

};

Mahou.Preloader.prototype = {
  preload: function () {
    this.loadingBar = this.add.sprite(100, 100, 'loadingBar');
    this.load.setPreloadSprite(this.loadingBar);

    this.load.spritesheet('star', 'assets/images/star.png', 75, 80);
    this.load.image('player', 'assets/images/witch.png');
    this.load.image('playerHitbox', 'assets/images/playerHitbox.png');
    this.load.audio('helloalone', 'assets/audio/halcali-hellohelloalone.m4a');
  },

  update: function () {
    if (this.cache.isSoundDecoded('helloalone')) {
      this.state.start('Game');
    }
  }
};
