var Mahou = Mahou || {};

Mahou.Game = function (game) {};

var lastTime = 0;
var mapbeats = [];

var beatmap = [
  {
    "time": 1080,
    "pos": 0
  },
  {
    "time": 1830,
    "pos": 0
  },
  {
    "time": 2430,
    "pos": 0
  },
  {
    "time": 2981,
    "pos": 0
  },
  {
    "time": 3563,
    "pos": 0
  },
  {
    "time": 4180,
    "pos": 0
  },
  {
    "time": 4763,
    "pos": 0
  },
  {
    "time": 5382,
    "pos": 0
  },
  {
    "time": 5963,
    "pos": -120
  },
  {
    "time": 6563,
    "pos": -120
  },
  {
    "time": 7131,
    "pos": -120
  },
  {
    "time": 7681,
    "pos": -120
  },
  {
    "time": 8314,
    "pos": 120
  },
  {
    "time": 8864,
    "pos": 120
  },
  {
    "time": 9480,
    "pos": 120
  },
  {
    "time": 10097,
    "pos": 120
  },
  {
    "time": 10697,
    "pos": 0
  },
  {
    "time": 11247,
    "pos": 0
  },
  {
    "time": 11797,
    "pos": 0
  },
  {
    "time": 12364,
    "pos": 0
  },
  {
    "time": 12999,
    "pos": 0
  },
  {
    "time": 13614,
    "pos": 0
  },
  {
    "time": 14214,
    "pos": 0
  },
  {
    "time": 14766,
    "pos": 0
  },
  {
    "time": 15364,
    "pos": -120
  },
  {
    "time": 15981,
    "pos": -120
  },
  {
    "time": 16631,
    "pos": -120
  },
  {
    "time": 17215,
    "pos": -120
  },
  {
    "time": 17765,
    "pos": 120
  },
  {
    "time": 18416,
    "pos": 120
  },
  {
    "time": 18981,
    "pos": 120
  },
  {
    "time": 19581,
    "pos": 120
  },
  {
    "time": 20181,
    "pos": 0
  },
  {
    "time": 20765,
    "pos": 0
  },
  {
    "time": 21381,
    "pos": 0
  },
  {
    "time": 22015,
    "pos": 0
  },
  {
    "time": 22599,
    "pos": -120
  },
  {
    "time": 23198,
    "pos": 120
  },
  {
    "time": 23782,
    "pos": -120
  },
  {
    "time": 24351,
    "pos": 120
  },
  {
    "time": 24965,
    "pos": 0
  },
  {
    "time": 25515,
    "pos": 0
  },
  {
    "time": 26099,
    "pos": 0
  },
  {
    "time": 26732,
    "pos": 0
  },
  {
    "time": 27316,
    "pos": -120
  },
  {
    "time": 27899,
    "pos": 120
  },
  {
    "time": 28532,
    "pos": -120
  },
  {
    "time": 29134,
    "pos": 120
  },
  {
    "time": 29733,
    "pos": 0
  },
  {
    "time": 30333,
    "pos": 0
  },
  {
    "time": 30933,
    "pos": 0
  },
  {
    "time": 31500,
    "pos": 0
  },
  {
    "time": 32066,
    "pos": -120
  },
  {
    "time": 32683,
    "pos": 120
  },
  {
    "time": 33300,
    "pos": -120
  },
  {
    "time": 33866,
    "pos": 120
  },
  {
    "time": 34450,
    "pos": 0
  },
  {
    "time": 35035,
    "pos": 0
  },
  {
    "time": 35651,
    "pos": 0
  },
  {
    "time": 36217,
    "pos": 0
  },
  {
    "time": 36817,
    "pos": -120
  },
  {
    "time": 37433,
    "pos": 120
  },
  {
    "time": 38033,
    "pos": -120
  },
  {
    "time": 38617,
    "pos": 120
  },
  {
    "time": 39184,
    "pos": -120
  },
  {
    "time": 40419,
    "pos": -120
  },
  {
    "time": 40984,
    "pos": -120
  },
  {
    "time": 41569,
    "pos": -120
  },
  {
    "time": 42717,
    "pos": 120
  },
  {
    "time": 43918,
    "pos": 120
  },
  {
    "time": 44517,
    "pos": 120
  },
  {
    "time": 45134,
    "pos": 120
  },
  {
    "time": 45702,
    "pos": 0
  },
  {
    "time": 46368,
    "pos": 0
  },
  {
    "time": 46951,
    "pos": 0
  },
  {
    "time": 47501,
    "pos": -120
  },
  {
    "time": 48086,
    "pos": 120
  },
  {
    "time": 48701,
    "pos": -120
  },
  {
    "time": 49870,
    "pos": -120
  },
  {
    "time": 50502,
    "pos": 0
  },
  {
    "time": 51052,
    "pos": 120
  },
  {
    "time": 52237,
    "pos": 120
  },
  {
    "time": 52802,
    "pos": 0
  },
  {
    "time": 53402,
    "pos": -120
  },
  {
    "time": 54669,
    "pos": 0
  },
  {
    "time": 55253,
    "pos": 0
  },
  {
    "time": 55819,
    "pos": 0
  },
  {
    "time": 56386,
    "pos": 120
  },
  {
    "time": 57052,
    "pos": 0
  },
  {
    "time": 57635,
    "pos": 120
  },
  {
    "time": 58202,
    "pos": 0
  },
  {
    "time": 58802,
    "pos": 0
  },
  {
    "time": 59420,
    "pos": 0
  },
  {
    "time": 60002,
    "pos": -120
  },
  {
    "time": 60619,
    "pos": 120
  },
  {
    "time": 61203,
    "pos": 120
  },
  {
    "time": 61803,
    "pos": 0
  },
  {
    "time": 62386,
    "pos": 120
  },
  {
    "time": 62971,
    "pos": 0
  },
  {
    "time": 63603,
    "pos": -120
  },
  {
    "time": 64170,
    "pos": 0
  },
  {
    "time": 64705,
    "pos": 120
  },
  {
    "time": 65336,
    "pos": 0
  },
  {
    "time": 65870,
    "pos": 120
  },
  {
    "time": 66487,
    "pos": 120
  },
  {
    "time": 67104,
    "pos": -120
  },
  {
    "time": 67670,
    "pos": 120
  },
  {
    "time": 68287,
    "pos": 120
  },
  {
    "time": 68920,
    "pos": -120
  },
  {
    "time": 69570,
    "pos": 0
  },
  {
    "time": 70089,
    "pos": 120
  },
  {
    "time": 71270,
    "pos": 0
  },
  {
    "time": 71887,
    "pos": -120
  },
  {
    "time": 72520,
    "pos": 0
  },
  {
    "time": 73638,
    "pos": 0
  },
  {
    "time": 74206,
    "pos": -120
  },
  {
    "time": 74837,
    "pos": 0
  },
  {
    "time": 76038,
    "pos": 0
  },
  {
    "time": 76588,
    "pos": 120
  },
  {
    "time": 77221,
    "pos": 120
  },
  {
    "time": 77904,
    "pos": -120
  },
  {
    "time": 78421,
    "pos": 120
  },
  {
    "time": 79021,
    "pos": -120
  },
  {
    "time": 79605,
    "pos": 0
  },
  {
    "time": 80205,
    "pos": 0
  },
  {
    "time": 80822,
    "pos": 0
  },
  {
    "time": 81422,
    "pos": 0
  },
  {
    "time": 81971,
    "pos": -120
  },
  {
    "time": 82572,
    "pos": 120
  },
  {
    "time": 83155,
    "pos": -120
  },
  {
    "time": 83739,
    "pos": 120
  },
  {
    "time": 84355,
    "pos": 0
  },
  {
    "time": 84972,
    "pos": 0
  },
  {
    "time": 85556,
    "pos": 0
  },
  {
    "time": 86139,
    "pos": 0
  },
  {
    "time": 86724,
    "pos": -120
  },
  {
    "time": 87306,
    "pos": 120
  },
  {
    "time": 87908,
    "pos": -120
  },
  {
    "time": 88505,
    "pos": 120
  },
  {
    "time": 89106,
    "pos": 0
  },
  {
    "time": 89722,
    "pos": 0
  },
  {
    "time": 90306,
    "pos": 0
  },
  {
    "time": 90873,
    "pos": 0
  },
  {
    "time": 91456,
    "pos": 120
  },
  {
    "time": 92139,
    "pos": -120
  },
  {
    "time": 92722,
    "pos": 120
  },
  {
    "time": 93289,
    "pos": -120
  },
  {
    "time": 93890,
    "pos": 0
  },
  {
    "time": 94506,
    "pos": 0
  },
  {
    "time": 95073,
    "pos": 0
  },
  {
    "time": 95656,
    "pos": 0
  },
  {
    "time": 96223,
    "pos": 120
  },
  {
    "time": 97390,
    "pos": 120
  },
  {
    "time": 97957,
    "pos": 0
  },
  {
    "time": 98608,
    "pos": 120
  },
  {
    "time": 99807,
    "pos": 120
  },
  {
    "time": 100990,
    "pos": -120
  },
  {
    "time": 101625,
    "pos": -120
  },
  {
    "time": 102190,
    "pos": 0
  },
  {
    "time": 102742,
    "pos": 120
  },
  {
    "time": 103407,
    "pos": 0
  },
  {
    "time": 103941,
    "pos": -120
  },
  {
    "time": 104559,
    "pos": 0
  },
  {
    "time": 105124,
    "pos": 120
  },
  {
    "time": 105724,
    "pos": -120
  },
  {
    "time": 106374,
    "pos": 0
  },
  {
    "time": 106941,
    "pos": 120
  },
  {
    "time": 107508,
    "pos": 0
  },
  {
    "time": 108074,
    "pos": -120
  },
  {
    "time": 108676,
    "pos": 0
  },
  {
    "time": 109258,
    "pos": -120
  },
  {
    "time": 109891,
    "pos": 120
  },
  {
    "time": 110491,
    "pos": -120
  },
  {
    "time": 111075,
    "pos": 120
  },
  {
    "time": 111692,
    "pos": 0
  },
  {
    "time": 112258,
    "pos": 120
  },
  {
    "time": 112877,
    "pos": 0
  },
  {
    "time": 113458,
    "pos": -120
  },
  {
    "time": 114060,
    "pos": 120
  },
  {
    "time": 114642,
    "pos": -120
  },
  {
    "time": 115225,
    "pos": 120
  },
  {
    "time": 115842,
    "pos": 0
  },
  {
    "time": 116459,
    "pos": 0
  },
  {
    "time": 117077,
    "pos": 0
  },
  {
    "time": 118210,
    "pos": 0
  },
  {
    "time": 119410,
    "pos": 0
  },
  {
    "time": 120009,
    "pos": 0
  },
  {
    "time": 120594,
    "pos": 0
  },
  {
    "time": 121159,
    "pos": -120
  },
  {
    "time": 121776,
    "pos": 120
  },
  {
    "time": 122326,
    "pos": 0
  },
  {
    "time": 122926,
    "pos": 0
  },
  {
    "time": 123494,
    "pos": 0
  },
  {
    "time": 124126,
    "pos": 0
  },
  {
    "time": 124710,
    "pos": 0
  },
  {
    "time": 133312,
    "pos": 0
  },
  {
    "time": 133844,
    "pos": 0
  }
];


var stars;
var player;
var playerHitbox;
var playerTrail;
var missedStars;

var comboTracker;
var scoreTracker;

var combo = 0;
var score = 0;

var text;

var cursors;

Mahou.Game.prototype = {

  preload: function () {
    this.music = this.add.audio('helloalone');

    stars = this.add.group();
    this.setupStars();

    beatmap.forEach(function (beat) {
      this.time.events.add(beat["time"] - 3900, this.spawnStar, this, beat["pos"]);
    }, this);
  },

  create: function () {
    this.music.play();

    player = this.add.sprite(this.world.centerX, 700, 'player');
    player.anchor.setTo(0.5, 1);
    this.add.tween(player).to({ y: 720 }, 280, Phaser.Easing.Quadratic.InOut, true, 0, -1, true);

    playerHitbox = this.add.sprite(this.world.centerX, 550, 'playerHitbox');
    playerHitbox.anchor.setTo(0.5);

    playerTrail = this.add.emitter(-2, -30, 200);
    playerTrail.makeParticles('star');
    playerTrail.width = 40;
    playerTrail.height = 20;
    playerTrail.setYSpeed(-40, 100);
    playerTrail.setRotation(-100, 100);
    playerTrail.setAlpha(0.1, 0.8, 1000);
    playerTrail.setScale(0.01, 0.4, 0.01, 0.4, 3000, Phaser.Easing.Cubic.Out);
    player.addChild(playerTrail);
    playerTrail.start(false, 3000, 1000);

    comboTracker = this.add.text(0, 30, "combo:\n" + combo, {font: '36px "pixelcute"', fill: 'pink', align: 'center'});
    comboTracker.anchor.setTo(0, 0);
    comboTracker.rotation = -0.3;
    comboTracker.alpha = 0.8;

    scoreTracker = this.add.text(470, 35, "points:\n" + score, {font: '36px "pixelcute"', fill: 'lemonchiffon', align: 'center'});
    scoreTracker.anchor.setTo(1, 0);
    scoreTracker.rotation = 0.3;
    scoreTracker.alpha = 0.8;

    missedStars = this.add.group();

    cursors = this.input.keyboard.createCursorKeys();
  },

  setupStars: function () {
    for (var i = 0; i < 20; i++) {
      var star = stars.create(400, 0, 'star', 0, false);
      star.anchor.setTo(0.5);
      star.animations.add('twinkle', [0, 1, 2, 3], 5, true);
      star.animations.play('twinkle');
    }
  },

  spawnStar: function (pos) {
    var star = stars.getFirstDead();
    star.reset(this.world.centerX, 100);
    star.scale.setTo(0, 0);
    star.alpha = 1;

    var drop = this.add.tween(star).to({ y: 590 }, 3000, Phaser.Easing.Linear.None, true);
    this.add.tween(star).to({ x: this.world.centerX + pos }, 3000, Phaser.Easing.Sinusoidal.In, true);
    this.add.tween(star.scale).to({ x: 1, y: 1}, 3000, Phaser.Easing.Sinusoidal.In, true);

    drop.onComplete.add(function (star) {
      if (this.checkOverlap(star)) {
        this.collect(star);
      } else {
        this.missed(star, pos);
      }
    }, this);
  },

  collect: function (item) {
    combo += 1;
    this.updateCombo();

    score += combo / 0.1;
    this.updateScore();

    this.add.tween(item.scale).to({ x: 4, y: 4 }, 500, Phaser.Easing.Linear.None, true);
    var scored = this.add.tween(item).to({ alpha: 0, angle: '+360' }, 500, Phaser.Easing.Linear.None, true);

    scored.onComplete.add(function (item) {
      item.kill();
    });
    text = 'hit!';
  },

  missed: function (item, pos) {
    combo = 0;
    this.updateCombo();

    stars.remove(item);
    missedStars.add(item);

    this.add.tween(item.scale).to({ x: 1.2, y: 1.2 }, 300, Phaser.Easing.Linear.None, true);
    var scored = this.add.tween(item).to({ y: 800, x: this.world.centerX + (2 * pos), alpha: 0.5 }, 300, Phaser.Easing.Linear.None, true);

    scored.onComplete.add(function (item) {
      missedStars.remove(item);
      stars.add(item);
      item.kill();
    });
    text = 'missed.';
  },

  updateCombo: function () {
    comboTracker.setText("combo:\n" + combo);
    playerTrail.frequency = 1000 - (combo * 20);
  },

  updateScore: function () {
    scoreTracker.setText("points:\n" + score);
  },

  update: function () {
    var milliseconds = Math.floor(this.time.totalElapsedSeconds() * 1000);
    if (milliseconds - lastTime >= 300) {
      if (cursors.left.isDown) {
        mapbeats.push({ time: milliseconds, pos: -120 });
        lastTime = milliseconds;
      } else if (cursors.right.isDown) {
        mapbeats.push({ time: milliseconds, pos: 120 });
        lastTime = milliseconds;
      } else if (cursors.up.isDown) {
        mapbeats.push({ time: milliseconds, pos: 0 });
        lastTime = milliseconds;
      } else if (cursors.down.isDown) {
        console.log(mapbeats);
        lastTime = milliseconds;
      }
    }

    if (cursors.left.isDown) {
      playerHitbox.x = (this.world.centerX - 120);
      player.x = (this.world.centerX - 160);
      player.rotation = 0.3;
    } else if (cursors.right.isDown) {
      playerHitbox.x = (this.world.centerX + 120);
      player.x = (this.world.centerX + 160);
      player.rotation = - 0.3;
    } else {
      playerHitbox.x = (this.world.centerX);
      player.x = (this.world.centerX);
      player.angle = 0;
    }
  },

  checkOverlap: function (incoming) {
    return Phaser.Rectangle.intersects(playerHitbox.getBounds(), incoming.getBounds());
  },

  render: function () {
    // game.debug.text(game.time.fps || '--', 2, 14, "#00ff00");
    // game.debug.text(text, 50, 300, "#00ff00", 'kitty');
    // game.debug.spriteBounds(player);
    // game.debug.spriteBounds(playerHitbox);
    // game.debug.spriteBounds(star || player);
    // game.debug.text(game.time.totalElapsedSeconds(), 2, 40, "white");
  }
}
