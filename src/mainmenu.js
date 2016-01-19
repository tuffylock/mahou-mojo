Mahou.MainMenu = function () {

  this.playText = "collect stars in\ntime to the beat!";
  this.controlText = "use the arrow\nkeys to move\nleft or right";

};

Mahou.MainMenu.prototype = {
  create: function () {
    if (typeof music === 'undefined' || !music.isPlaying) {
      music = this.add.audio('menuloop', 0.6, true);
      music.play();
    }

    this.add.sprite(this.world.centerX, 50, 'menubox').anchor.setTo(0.5, 0);

    var playButton = this.add.button(this.world.centerX, 420, 'button', this.clickPlay, this);
    playButton.anchor.setTo(0.5);
    playText = this.add.text(3, 0, 'Play', {font: "42px 'pixelcute'", fill: 'ivory', align: 'center'});
    playText.anchor.setTo(0.5);
    playButton.addChild(playText);
    playButton.events.onInputOver.add(this.playHover, this);

    var controlButton = this.add.button(this.world.centerX, 520, 'button', this.clickControl, this);
    controlButton.anchor.setTo(0.5);
    var controlText = this.add.text(3, 0, 'Controls', {font: "42px 'pixelcute'", fill: 'ivory', align: 'center'});
    controlText.anchor.setTo(0.5);
    controlButton.addChild(controlText);
    controlButton.events.onInputOver.add(this.controlHover, this);

    this.infoText = this.add.text(this.world.centerX, 220, this.playText, {font: "26px 'pixelcute'", fill: 'ivory', align: 'center'});
    this.infoText.anchor.setTo(0.5);

    this.leftStar = this.add.sprite(this.world.centerX - 130, 420, 'star');
    this.leftStar.anchor.setTo(0.5);
    this.leftStar.scale.setTo(0.8);
    this.rightStar = this.add.sprite(this.world.centerX + 130, 420, 'star');
    this.rightStar.anchor.setTo(0.5);
    this.rightStar.scale.setTo(0.8);
  },

  clickPlay: function () {
    this.state.start('SongSelect');
  },

  playHover: function () {
    this.add.tween(this.leftStar).to({ y: 420 }, 50, 'Linear', true);
    this.add.tween(this.rightStar).to({ y: 420 }, 50, 'Linear', true);

    this.infoText.setText(this.playText);
  },

  clickControl: function () {
    this.state.start('GameOver');
  },

  controlHover: function () {
    this.add.tween(this.leftStar).to({ y: 520 }, 50, 'Linear', true);
    this.add.tween(this.rightStar).to({ y: 520 }, 50, 'Linear', true);

    this.infoText.setText(this.controlText);
  }
}
