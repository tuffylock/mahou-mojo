Mahou.Controls = function () {};

Mahou.Controls.prototype = {
  create: function () {
    this.add.sprite(this.world.centerX, 50, 'infobox').anchor.setTo(0.5, 0);

    mainButton = this.add.button(this.world.centerX, 560, 'button', this.clickMain, this)
    mainButton.anchor.setTo(0.5);
    mainButton.scale.setTo(0.6);
    var mainText = this.add.text(3, 0, 'Main Menu', {font: "36px 'pixelcute'", fill: 'ivory', align: 'center'});
    mainText.anchor.setTo(0.5);
    mainButton.addChild(mainText);
  },

  clickMain: function () {
    this.state.start('MainMenu');
  }
};
