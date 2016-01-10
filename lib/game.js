var beatmap = [
  {time: 1000, pos: -120},
  {time: 1500, pos: -120},
  {time: 2000, pos: 120},
  {time: 2500, pos: 0},
  {time: 3000, pos: 120},
  {time: 3500, pos: -120},
  {time: 4000, pos: -120},
  {time: 4500, pos: 120},
  {time: 5000, pos: 0},
  {time: 5500, pos: 120},
  {time: 6000, pos: -120},
  {time: 6500, pos: -120},
  {time: 7000, pos: 120},
  {time: 7500, pos: 0},
  {time: 8000, pos: 120},
  {time: 9000, pos: 0},
  {time: 11000, pos: -120},
  {time: 11500, pos: -120},
  {time: 12000, pos: 120},
  {time: 12500, pos: 0},
  {time: 13000, pos: 120},
  {time: 13500, pos: -120},
  {time: 14000, pos: -120},
  {time: 14500, pos: 120},
  {time: 15000, pos: 0},
  {time: 15500, pos: 120},
  {time: 16000, pos: -120},
  {time: 16500, pos: -120},
  {time: 17000, pos: 120},
  {time: 17500, pos: 0},
  {time: 18000, pos: 120},
  {time: 19000, pos: 0}
];

var game = new Phaser.Game(480, 720, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render }, true, false);

function preload() {
  game.time.advancedTiming = true;

  game.load.spritesheet('star', 'assets/images/star.png', 75, 80);
  game.load.image('player', 'assets/images/witch.png');
  game.load.image('playerHitbox', 'assets/images/playerHitbox.png');
}

var stars;
var player;
var playerHitbox;
var playerTrail;

var text;

var cursors;

function create() {
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  stars = game.add.group();
  setupStars();

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

  missedStars = game.add.group();

  cursors = game.input.keyboard.createCursorKeys();
}

function setupStars() {
  for (var i = 0; i < 20; i++) {
    var star = stars.create(400, 0, 'star', 0, false);
    star.anchor.setTo(0.5);
    star.animations.add('twinkle', [0, 1, 2, 3], 5, true);
    star.animations.play('twinkle');
  }
}

function spawnStar(pos) {
  var star = stars.getFirstDead();
  star.reset(game.world.centerX, 100);
  star.scale.setTo(0, 0);
  star.alpha = 1;

  var drop = game.add.tween(star).to({ y: 590 }, 3000, Phaser.Easing.Linear.None, true);
  game.add.tween(star).to({ x: game.world.centerX + pos }, 3000, Phaser.Easing.Sinusoidal.In, true);
  game.add.tween(star.scale).to({ x: 1, y: 1}, 3000, Phaser.Easing.Sinusoidal.In, true);

  drop.onComplete.add(function (star) {
    if (checkOverlap(star)) {
      collect(star);
    } else {
      missed(star, pos);
    }
  });
}

function collect(item) {
  game.add.tween(item.scale).to({ x: 4, y: 4 }, 500, Phaser.Easing.Linear.None, true);
  var scored = game.add.tween(item).to({ alpha: 0, angle: '+360' }, 500, Phaser.Easing.Linear.None, true);

  scored.onComplete.add(function (item) {
    item.kill();
  });
  text = 'hit!';
}

function missed(item, pos) {
  stars.remove(item);
  missedStars.add(item);

  game.add.tween(item.scale).to({ x: 1.2, y: 1.2 }, 300, Phaser.Easing.Linear.None, true);
  var scored = game.add.tween(item).to({ y: 800, x: game.world.centerX + (2 * pos), alpha: 0.2 }, 300, Phaser.Easing.Linear.None, true);

  scored.onComplete.add(function (item) {
    missedStars.remove(item);
    stars.add(item);
    item.kill();
  });
  text = 'missed.';
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

function checkOverlap(incoming) {
  return Phaser.Rectangle.intersects(playerHitbox.getBounds(), incoming.getBounds());
}

function render() {
  game.debug.text(game.time.fps || '--', 2, 14, "#00ff00");
  game.debug.text(text, 50, 300, "#00ff00");
  // game.debug.spriteBounds(player);
  // game.debug.spriteBounds(playerHitbox);
  // game.debug.spriteBounds(star || player);
  // game.debug.text(game.time.totalElapsedSeconds(), 2, 40, "white");
}
