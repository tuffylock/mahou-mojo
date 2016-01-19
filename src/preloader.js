Mahou.Preloader = function () {};

Mahou.Preloader.prototype = {
  preload: function () {
    this.loadingBar = this.add.sprite(100, 100, 'loadingBar');
    this.load.setPreloadSprite(this.loadingBar);

    this.load.image('menubox', 'assets/images/menubox.png');
    this.load.image('infobox', 'assets/images/infobox.png');
    this.load.image('button', 'assets/images/button.png');
    this.load.image('minibutton', 'assets/images/minibutton.png');
    this.load.image('back', 'assets/images/back.png');
    this.load.image('upArrow', 'assets/images/upArrow.png');
    this.load.image('downArrow', 'assets/images/downArrow.png');

    this.load.spritesheet('star', 'assets/images/star.png', 75, 80);
    this.load.image('player', 'assets/images/witch.png');
    this.load.image('playerHitbox', 'assets/images/playerHitbox.png');

    this.load.audio('menuloop', ['assets/audio/menuloop.m4a', 'assets/audio/menuloop.ogg']);
    this.load.audio('birdsong', ['assets/audio/birdsong.m4a', 'assets/audio/birdsong.ogg']);

    this.load.audio('alonetogether', ['assets/audio/alonetogether.m4a', 'assets/audio/alonetogether.ogg']);
    this.load.audio('hellohello', ['assets/audio/hellohello.m4a', 'assets/audio/hellohello.ogg']);
  },

  update: function () {
    if (this.cache.isSoundDecoded('menuloop')) {
      this.state.start('MainMenu');
    }
  }
};
