Mahou.Game = function (game) {};

// // create mode
var lastTime = 0;
var mapbeats = [];

var player;
var playerHitbox;
var playerTrail;
var missedStars;

var comboTracker = null;
var scoreTracker = null;

var cursors;

Mahou.Game.prototype = {

  preload: function () {
    this.game.time.reset();

    this.combo = 0;
    this.highestCombo = 0;

    this.score = 0;

    this.misses = 0;

    music.stop();
    music = this.add.audio(song.track);
    music.onStop.addOnce(this.wrapUp, this);

    this.stars = this.add.group();
    this.setupStars();

    player = this.add.sprite(this.world.centerX, 700, 'player');
    player.anchor.setTo(0.5, 1);

    playerHitbox = this.add.sprite(this.world.centerX, 550, 'playerHitbox');
    playerHitbox.anchor.setTo(0.5);

    song.beatmap.forEach(function (beat) {
      this.time.events.add(beat["time"] - 3000, this.spawnStar, this, beat["pos"]);
    }, this);
  },

  create: function () {
    // this.curtime = this.add.text(100, 100, music.currentTime, {font: "36px 'pixelcute'", fill: 'pink', align: 'center'});
    // this.game.onBlur.add( function () {
    //   this.curtime.setText('boo!');
    // }, this);
    // this.curtime.setText(music.currentTime);
    music.play();

    this.add.tween(player).to({ y: 720 }, song.beat, 'Quad.easeInOut', true, 0, -1, true);

    playerTrail = this.add.emitter(-2, -30, 200);
    playerTrail.makeParticles('star');
    playerTrail.width = 40;
    playerTrail.height = 20;
    playerTrail.setYSpeed(-40, 100);
    playerTrail.setRotation(-100, 100);
    playerTrail.setAlpha(0.1, 0.8, 1000);
    playerTrail.setScale(0.01, 0.4, 0.01, 0.4, 3000, 'Cubic.easeOut');
    player.addChild(playerTrail);
    playerTrail.start(false, 3000, 1000);

    comboTracker = this.add.text(0, 30, "combo:\n" + this.combo, {font: "36px 'pixelcute'", fill: 'pink', align: 'center'});
    comboTracker.anchor.setTo(0, 0);
    comboTracker.rotation = -0.3;
    comboTracker.alpha = 0.8;

    scoreTracker = this.add.text(470, 35, "points:\n" + this.score, {font: "36px 'pixelcute'", fill: 'lemonchiffon', align: 'center'});
    scoreTracker.anchor.setTo(1, 0);
    scoreTracker.rotation = 0.3;
    scoreTracker.alpha = 0.8;

    missedStars = this.add.group();

    this.songEnd = (song.beatmap[song.beatmap.length - 1].time) / 1000;

    cursors = this.input.keyboard.createCursorKeys();
  },

  setupStars: function () {
    for (var i = 0; i < 25; i++) {
      var star = this.stars.create(400, 0, 'star', 0, false);
      star.anchor.setTo(0.5);
      star.animations.add('twinkle', [0, 1, 2, 3], 5, true);
      star.animations.play('twinkle');
    }
  },

  spawnStar: function (pos) {
    var star = this.stars.getFirstDead();
    star.reset(this.world.centerX, 100);
    star.scale.setTo(0, 0);
    star.alpha = 1;

    var drop = this.add.tween(star).to({ y: 590 }, 3000, 'Linear', true);
    this.add.tween(star).to({ x: this.world.centerX + pos }, 3000, 'Sine.easeIn', true);
    this.add.tween(star.scale).to({ x: 1, y: 1}, 3000, 'Sine.easeIn', true);

    drop.onComplete.add(function (star) {
      if (this.checkOverlap(star)) {
        this.collect(star);
      } else {
        this.missed(star, pos);
      }
    }, this);
  },

  collect: function (item) {
    this.combo += 1;
    this.updateCombo();

    if (this.combo > this.highestCombo) {
      this.highestCombo = this.combo;
    }

    this.score += this.combo / 0.1;
    this.updateScore();

    this.add.tween(item.scale).to({ x: 4, y: 4 }, 500, 'Linear', true);
    var scored = this.add.tween(item).to({ alpha: 0, angle: '+360' }, 500, 'Linear', true);

    scored.onComplete.add(function (item) {
      item.kill();
    });
  },

  missed: function (item, pos) {
    this.combo = 0;
    this.updateCombo();

    this.misses += 1;

    this.stars.remove(item);
    missedStars.add(item);

    this.add.tween(item.scale).to({ x: 1.2, y: 1.2 }, 300, 'Linear', true);
    var scored = this.add.tween(item).to({ y: 800, x: this.world.centerX + (2 * pos), alpha: 0.5 }, 300, 'Linear', true);

    scored.onComplete.add(function (item) {
      missedStars.remove(item);
      this.stars.add(item);
      item.kill();
    }, this);
  },

  updateCombo: function () {
    comboTracker.setText("combo:\n" + this.combo);
    playerTrail.frequency = 1000 - (this.combo * 20);
  },

  updateScore: function () {
    scoreTracker.setText("points:\n" + this.score);
  },

  update: function () {

    // // create mode
    var milliseconds = Math.floor(this.time.totalElapsedSeconds() * 1000);
    if (milliseconds - lastTime >= 250) {
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

    // if (this.time.totalElapsedSeconds() >= this.songEnd) {
    //   this.wrapUp();
    // }

    if (cursors.up.isDown || cursors.down.isDown) {
      playerHitbox.x = (this.world.centerX);
      player.x = (this.world.centerX);
      player.angle = 0;
    } else if (cursors.left.isDown) {
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

  wrapUp: function () {
    // music.stop();
    var exit = this.add.tween(player).to({ y: 150 }, 2000, 'Sine.easeOut', true);
    this.add.tween(player.scale).to({ x: 0, y: 0}, 2000, 'Sine.easeOut', true);

    exit.onComplete.add(function () {
      this.state.start('GameOver', true, false, this.highestCombo, this.score, this.misses, song.beatmap.length);
    }, this);
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
