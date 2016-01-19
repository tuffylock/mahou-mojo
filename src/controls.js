Mahou.Controls = function () {};

Mahou.Controls.prototype = {
  create: function () {
    this.add.sprite(this.world.centerX, 50, 'infobox').anchor.setTo(0.5, 0);

    menuButton = this.add.button(this.world.centerX, 560, 'button', this.clickMenu, this)
    menuButton.anchor.setTo(0.5);
    menuButton.scale.setTo(0.7);
    var menuText = this.add.text(3, 0, 'Main Menu', {font: "36px 'pixelcute'", fill: 'ivory', align: 'center'});
    menuText.anchor.setTo(0.5);
    menuButton.addChild(menuText);

    var controls = "Collect incoming stars\nfrom the left, right,\nand center of the\nscreen.\n\nHold the left or right\narrow key down to\nmove that direction.\n\nHolding no keys\nreturns you to the\ncenter.";

    this.add.text(this.world.centerX, 110, controls, {font: "22px 'pixelcute'", fill: 'ivory', align: 'center'}).anchor.setTo(0.5, 0);
  },

  clickMenu: function () {
    click.play();
    this.state.start('MainMenu');
  }
};
