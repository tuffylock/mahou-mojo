var game = new Phaser.Game(480, 720, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render }, true, false);

function preload() {
  game.load.spritesheet('star', 'assets/images/star.png', 100, 110);
  game.load.image('witch', 'assets/images/witch.png');
}

var star;
var player;
var cursors;

function create() {
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  star = game.add.sprite(game.world.centerX, 500, 'star');
  star.anchor.setTo(0.5, 1);
  star.animations.add('twinkle', [0, 1, 2, 3], 5, true)
  star.animations.play('twinkle');

  player = game.add.sprite(game.world.centerX, 700, 'witch');
  player.anchor.setTo(0.5, 1);
  game.add.tween(player).to({ y: 720 }, 500, Phaser.Easing.Quadratic.InOut, true, 0, -1, true);

  cursors = game.input.keyboard.createCursorKeys();
}

function update() {
  if (cursors.left.isDown) {
    player.x = (game.world.centerX - 150);
    player.rotation = 0.3;
  } else if (cursors.right.isDown) {
    player.x = (game.world.centerX + 150);
    player.rotation = - 0.3;
  } else {
    player.x = (game.world.centerX);
    player.angle = 0;
  }
}

function render() {

}
