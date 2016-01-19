Mahou.GameOver = function () {};

Mahou.GameOver.prototype = {
  init: function (highestCombo, score, misses, total) {
    this.highestCombo = highestCombo;
    this.score = score;
    this.misses = misses;
    this.total = total;
  },

  create: function () {
    this.birdsong = this.add.audio('birdsong', 0.1, true).play();

    this.add.sprite(this.world.centerX, 50, 'infobox').anchor.setTo(0.5, 0);

    var grade = this.grade();
    var scores = "score: " + this.score +
                 "\n\nhits: " + (this.total - this.misses) +
                 '/' + this.total +
                 "\n\nhigh combo: " + this.highestCombo;

    this.add.text(this.world.centerX, 100, grade, {font: "96px 'pixelcute", fill: 'ivory', align: 'center'}).anchor.setTo(0.5, 0);
    this.add.text(this.world.centerX, 250, scores, {font: "34px 'pixelcute'", fill: 'ivory', align: 'center'}).anchor.setTo(0.5, 0);

    newSongButton = this.add.button(150, 560, 'button', this.newSong, this)
    newSongButton.anchor.setTo(0.5);
    newSongButton.scale.setTo(0.6);
    var newSongText = this.add.text(3, 0, 'New Song', {font: "36px 'pixelcute'", fill: 'ivory', align: 'center'});
    newSongText.anchor.setTo(0.5);
    newSongButton.addChild(newSongText);

    restartButton = this.add.button(330, 560, 'button', this.restart, this)
    restartButton.anchor.setTo(0.5);
    restartButton.scale.setTo(0.6);
    var restartText = this.add.text(3, 0, 'Try Again', {font: "36px 'pixelcute'", fill: 'ivory', align: 'center'});
    restartText.anchor.setTo(0.5);
    restartButton.addChild(restartText);
  },

  grade: function () {
    var ratio = this.total / this.misses;

    if (ratio === 1) {
      return 'AAA';
    } else if (ratio > .9) {
      return 'A';
    } else if (ratio > .8) {
      return 'B';
    } else if (ratio > .7) {
      return 'C';
    } else if (ratio > .6) {
      return 'D';
    } else {
      return 'F';
    }
  },

  newSong: function () {
    click.play();
    this.birdsong.stop();
    this.state.start('SongSelect');
  },

  restart: function () {
    click.play();
    this.birdsong.stop();
    this.state.start('Game');
  }
};
