var game = new Phaser.Game(480, 720, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render }, true, false);

function preload() {
  game.time.advancedTiming = true;

  game.load.spritesheet('star', 'assets/images/star.png', 100, 110);
  game.load.image('player', 'assets/images/witch.png');
  game.load.image('playerHitbox', 'assets/images/playerHitbox.png');
}

var star;
var player;
var playerHitbox;
var playerTrail;

var text = 'hey';

var cursors;

function create() {
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  star = game.add.sprite(game.world.centerX, 500, 'star');
  star.anchor.setTo(0.5, 1);
  star.animations.add('twinkle', [0, 1, 2, 3], 5, true);
  star.animations.play('twinkle');

  player = game.add.sprite(game.world.centerX, 700, 'player');
  player.anchor.setTo(0.5, 1);
  game.add.tween(player).to({ y: 720 }, 500, Phaser.Easing.Quadratic.InOut, true, 0, -1, true);

  playerHitbox = game.add.sprite(game.world.centerX, 570, 'playerHitbox');
  playerHitbox.anchor.setTo(0.5);

  playerTrail = game.add.emitter(-2, -30, 100);
  playerTrail.makeParticles('star');
  playerTrail.width = 40;
  playerTrail.height = 10;
  playerTrail.setYSpeed(-20, 50);
  playerTrail.setRotation(-100, 100);
  playerTrail.setAlpha(0.1, 0.8, 1000);
  playerTrail.setScale(0.02, 0.2, 0.02, 0.2, 2000, Phaser.Easing.Cubic.Out);
  player.addChild(playerTrail);
  playerTrail.start(false, 2000, 1000);

  cursors = game.input.keyboard.createCursorKeys();
}

function update() {
  if (cursors.left.isDown) {
    playerHitbox.x = (game.world.centerX - 120);
    player.x = (game.world.centerX - 160);
    player.rotation = 0.3;
  } else if (cursors.right.isDown) {
    playerHitbox.x = (game.world.centerX + 120);
    player.x = (game.world.centerX + 160);
    player.rotation = - 0.3;
  } else {
    playerHitbox.x = (game.world.centerX);
    player.x = (game.world.centerX);
    player.angle = 0;
  }
}

function render() {
  game.debug.text(game.time.fps || '--', 2, 14, "#00ff00");
  game.debug.text(text, 50, 300, "#00ff00");
  game.debug.spriteBounds(player);
  game.debug.spriteBounds(playerHitbox);
  game.debug.spriteBounds(star);
}
