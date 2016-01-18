Mahou.SongSelect = function () {};

Mahou.SongSelect.prototype = {
  create: function () {
    this.add.sprite(this.world.centerX, 50, 'menubox').anchor.setTo(0.5, 0);

    this.add.button(160, 360, 'upArrow', this.clickUp, this);
    this.add.button(160, 530, 'downArrow', this.clickDown, this);

    this.add.button(50, 550, 'back', this.clickBack, this);

    var goButton = this.add.button(380, 460, 'minibutton', this.clickGo, this);
    goButton.anchor.setTo(0.5);
    var goText = this.add.text(3, 0, 'Go!', {font: "32px 'pixelcute'", fill: 'ivory', align: 'center'});
    goText.anchor.setTo(0.5);
    goButton.addChild(goText);
  },

  clickUp: function () {

  },

  clickDown: function () {

  },

  clickBack: function () {
    this.state.start('MainMenu');
  },

  clickGo: function () {
    this.state.start('Game');
  }
};


var SONGS = [
  {
    track: 'alonetogether',
    title: 'Alone Together',
    artist: 'Aivi & Surasshu',
    album: 'Fusion Mixtape',
    beat: 280,
    beatmap: {}
  },
  {
    track: 'hellohello'
  },
  {

  }
];
