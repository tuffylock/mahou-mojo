var beatmap = [
  {time: 1000, pos: -120},
  {time: 1500, pos: -120},
  {time: 2000, pos: 120},
  {time: 3000, pos: 0},
  {time: 4000, pos: 120}
];

var game = new Phaser.Game(480, 720, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render }, true, false);

function preload() {
  game.time.advancedTiming = true;

  game.load.spritesheet('star', 'assets/images/star.png', 75, 80);
  game.load.image('player', 'assets/images/witch.png');
  game.load.image('playerHitbox', 'assets/images/playerHitbox.png');
}

var star;
var stars;
var player;
var playerHitbox;
var playerTrail;

var text;

var cursors;

function create() {
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  stars = game.add.group();
  beatmap.forEach(function (beat) {
    game.time.events.add(beat.time, spawnStar, this, beat.pos);
  });

  player = game.add.sprite(game.world.centerX, 700, 'player');
  player.anchor.setTo(0.5, 1);
  game.add.tween(player).to({ y: 720 }, 500, Phaser.Easing.Quadratic.InOut, true, 0, -1, true);

  playerHitbox = game.add.sprite(game.world.centerX, 550, 'playerHitbox');
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

function spawnStar(pos) {
  star = game.add.sprite(game.world.centerX, 100, 'star');
  star.anchor.setTo(0.5);
  star.scale.setTo(0, 0);
  star.animations.add('twinkle', [0, 1, 2, 3], 5, true);
  star.animations.play('twinkle');

  var drop = game.add.tween(star).to({ x: game.world.centerX + pos, y: 800 }, 5000, Phaser.Easing.Linear.None, true);
  game.add.tween(star.scale).to({ x: 1, y: 1}, 5000, Phaser.Easing.Linear.none, true);

  drop.onComplete.add(function () {
    this.star.destroy();
  }, this);
}

function update() {
  if (Math.round(game.time.totalElapsedSeconds() % 5) === 0) {
    // spawnStar();
  }

  if (checkOverlap()) {
    text = 'hit!';
  } else {
    text = 'no hit.';
  }

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

function checkOverlap() {
  if (false) {
    return Phaser.Rectangle.intersects(playerHitbox.getBounds(), star.getBounds());
  }
}

function render() {
  game.debug.text(game.time.fps || '--', 2, 14, "#00ff00");
  // game.debug.text(text, 50, 300, "#00ff00");
  // game.debug.spriteBounds(player);
  // game.debug.spriteBounds(playerHitbox);
  // game.debug.spriteBounds(star || player);
  // game.debug.text(game.time.totalElapsedSeconds(), 2, 40, "white");
}
