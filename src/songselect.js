Mahou.SongSelect = function () {};

Mahou.SongSelect.prototype = {
  create: function () {
    this.add.sprite(this.world.centerX, 50, 'menubox').anchor.setTo(0.5, 0);

    this.add.button(190, 380, 'upArrow', this.clickUp, this).anchor.setTo(0.5);
    this.add.button(190, 540, 'downArrow', this.clickDown, this).anchor.setTo(0.5);

    this.add.button(50, 550, 'back', this.clickBack, this);

    var goButton = this.add.button(380, 460, 'minibutton', this.clickGo, this);
    goButton.anchor.setTo(0.5);
    var goText = this.add.text(3, 0, 'Go!', {font: "32px 'pixelcute'", fill: 'ivory', align: 'center'});
    goText.anchor.setTo(0.5);
    goButton.addChild(goText);

    // this.songs = this.add.group();

    music.stop();
    song = SONGS[0];
    music = this.add.audio(song.track);
    music.play();

    // SONGS.forEach

    this.selected = this.add.text(190, 460, song.title, {font: "30px 'pixelcute'", fill: 'ivory', align: 'center'});
    this.selected.anchor.setTo(0.5);

    this.previous = this.add.text(190, 420, SONGS[SONGS.length - 1].title, {font: "30px 'pixelcute'", fill: 'ivory', align: 'center'});
    this.previous.anchor.setTo(0.5);
    this.previous.scale.setTo(0.6);
    this.previous.alpha = 0.8;

    this.next = this.add.text(190, 500, SONGS[1].title, {font: "30px 'pixelcute'", fill: 'ivory', align: 'center'});
    this.next.anchor.setTo(0.5);
    this.next.scale.setTo(0.6);
    this.next.alpha = 0.8;

    this.songInfo = this.add.text(this.world.centerX, 220, '', {font: "22px 'pixelcute'", fill: 'ivory', align: 'center'});
    this.songInfo.anchor.setTo(0.5);

    this.updateDetails();
  },

  updateDetails: function () {
    this.songInfo.setText(
      'by: ' + song.artist + "\n\n" +
      'from: ' + song.album + "\n\n" +
      'length: ' + song.length
    );
  },

  clickUp: function () {
    click.play();
    var index = SONGS.indexOf(song) - 1;
    if (index < 0) {
      index = SONGS.length - 1;
    }

    var prevIndex = index - 1;
    if (prevIndex < 0) {
      prevIndex = SONGS.length - 1;
    }

    var nextIndex = index + 1;
    if (nextIndex === SONGS.length) {
      nextIndex = 0;
    }

    song = SONGS[index];
    this.selected.setText(song.title);
    this.updateDetails();

    this.previous.setText(SONGS[prevIndex].title);
    this.next.setText(SONGS[nextIndex].title);

    music.stop();
    music = this.add.audio(song.track);
    music.play();
  },

  clickDown: function () {
    click.play();
    var index = SONGS.indexOf(song) + 1;
    if (index === SONGS.length) {
      index = 0;
    }

    var prevIndex = index - 1;
    if (prevIndex < 0) {
      prevIndex = SONGS.length - 1;
    }

    var nextIndex = index + 1;
    if (nextIndex === SONGS.length) {
      nextIndex = 0;
    }

    song = SONGS[index];
    this.selected.setText(song.title);
    this.updateDetails();

    this.previous.setText(SONGS[prevIndex].title);
    this.next.setText(SONGS[nextIndex].title);

    music.stop();
    music = this.add.audio(song.track);
    music.play();
  },

  clickBack: function () {
    music.stop();
    click.play();
    this.state.start('MainMenu');
  },

  clickGo: function () {
    click.play();
    this.state.start('Game');
  }
};


var SONGS = [
  { track: 'alonetogether',
    title: 'Alone Together',
    artist: 'Aivi and Surasshu',
    album: 'Fusion Mixtape',
    length: '0:54',
    beat: 270,
    beatmap: [
      {
        "time": 2567,
        "pos": -120
      },
      {
        "time": 2867,
        "pos": -120
      },
      {
        "time": 3167,
        "pos": -120
      },
      {
        "time": 3467,
        "pos": -120
      },
      {
        "time": 3767,
        "pos": -120
      },
      {
        "time": 4067,
        "pos": -120
      },
      {
        "time": 4369,
        "pos": -120
      },
      {
        "time": 4684,
        "pos": -120
      },
      {
        "time": 4984,
        "pos": 120
      },
      {
        "time": 5284,
        "pos": 120
      },
      {
        "time": 5584,
        "pos": 120
      },
      {
        "time": 5884,
        "pos": 120
      },
      {
        "time": 6184,
        "pos": 120
      },
      {
        "time": 6484,
        "pos": 120
      },
      {
        "time": 6784,
        "pos": 120
      },
      {
        "time": 7084,
        "pos": 120
      },
      {
        "time": 8534,
        "pos": -120
      },
      {
        "time": 8836,
        "pos": -120
      },
      {
        "time": 9152,
        "pos": -120
      },
      {
        "time": 10584,
        "pos": 120
      },
      {
        "time": 10884,
        "pos": 120
      },
      {
        "time": 11184,
        "pos": 120
      },
      {
        "time": 11485,
        "pos": -120
      },
      {
        "time": 11785,
        "pos": -120
      },
      {
        "time": 13001,
        "pos": 120
      },
      {
        "time": 13303,
        "pos": 120
      },
      {
        "time": 13651,
        "pos": -120
      },
      {
        "time": 13951,
        "pos": -120
      },
      {
        "time": 15319,
        "pos": 120
      },
      {
        "time": 15635,
        "pos": 120
      },
      {
        "time": 15935,
        "pos": -120
      },
      {
        "time": 16251,
        "pos": -120
      },
      {
        "time": 16552,
        "pos": 120
      },
      {
        "time": 16852,
        "pos": 120
      },
      {
        "time": 17152,
        "pos": 120
      },
      {
        "time": 17452,
        "pos": 120
      },
      {
        "time": 17852,
        "pos": -120
      },
      {
        "time": 18152,
        "pos": -120
      },
      {
        "time": 18453,
        "pos": -120
      },
      {
        "time": 20019,
        "pos": 120
      },
      {
        "time": 20319,
        "pos": 120
      },
      {
        "time": 20619,
        "pos": -120
      },
      {
        "time": 20919,
        "pos": -120
      },
      {
        "time": 22286,
        "pos": 120
      },
      {
        "time": 22586,
        "pos": 120
      },
      {
        "time": 22886,
        "pos": -120
      },
      {
        "time": 23186,
        "pos": -120
      },
      {
        "time": 24703,
        "pos": 120
      },
      {
        "time": 25003,
        "pos": 120
      },
      {
        "time": 25303,
        "pos": -120
      },
      {
        "time": 25603,
        "pos": -120
      },
      {
        "time": 27003,
        "pos": 120
      },
      {
        "time": 27303,
        "pos": 120
      },
      {
        "time": 27820,
        "pos": 120
      },
      {
        "time": 28120,
        "pos": 120
      },
      {
        "time": 29389,
        "pos": -120
      },
      {
        "time": 29703,
        "pos": -120
      },
      {
        "time": 30604,
        "pos": -120
      },
      {
        "time": 30920,
        "pos": -120
      },
      {
        "time": 31227,
        "pos": -120
      },
      {
        "time": 31537,
        "pos": -120
      },
      {
        "time": 31837,
        "pos": -120
      },
      {
        "time": 32420,
        "pos": 120
      },
      {
        "time": 32720,
        "pos": 120
      },
      {
        "time": 34304,
        "pos": 120
      },
      {
        "time": 34604,
        "pos": 120
      },
      {
        "time": 34904,
        "pos": 120
      },
      {
        "time": 35204,
        "pos": 120
      },
      {
        "time": 35987,
        "pos": -120
      },
      {
        "time": 36287,
        "pos": -120
      },
      {
        "time": 37104,
        "pos": 120
      },
      {
        "time": 37404,
        "pos": 120
      },
      {
        "time": 37704,
        "pos": 120
      },
      {
        "time": 38856,
        "pos": -120
      },
      {
        "time": 39171,
        "pos": -120
      },
      {
        "time": 39471,
        "pos": -120
      },
      {
        "time": 39771,
        "pos": -120
      },
      {
        "time": 40071,
        "pos": 120
      },
      {
        "time": 40371,
        "pos": 120
      },
      {
        "time": 40671,
        "pos": -120
      },
      {
        "time": 40973,
        "pos": -120
      },
      {
        "time": 41288,
        "pos": 120
      },
      {
        "time": 41588,
        "pos": 120
      },
      {
        "time": 41888,
        "pos": -120
      },
      {
        "time": 42188,
        "pos": -120
      },
      {
        "time": 42955,
        "pos": -120
      },
      {
        "time": 43290,
        "pos": -120
      },
      {
        "time": 43605,
        "pos": 120
      },
      {
        "time": 43905,
        "pos": 120
      },
      {
        "time": 44205,
        "pos": 120
      },
      {
        "time": 44505,
        "pos": 120
      },
      {
        "time": 44805,
        "pos": 120
      },
      {
        "time": 46137,
        "pos": 0
      },
      {
        "time": 47137,
        "pos": 0
      },
      {
        "time": 48171,
        "pos": 0
      }
    ]
  },

  { track: 'monamour',
    title: 'Mon Amour, Ami',
    artist: 'Virginie Ledoyen',
    album: '8 Femmes',
    length: '1:44',
    beat: 250,
    beatmap: [
      {
        "time": 2567,
        "pos": -120
      },
      {
        "time": 2867,
        "pos": -120
      },
      {
        "time": 3167,
        "pos": -120
      },
      {
        "time": 3467,
        "pos": -120
      },
      {
        "time": 3767,
        "pos": -120
      },
      {
        "time": 4067,
        "pos": -120
      },
      {
        "time": 4369,
        "pos": -120
      },
      {
        "time": 4684,
        "pos": -120
      },
      {
        "time": 4984,
        "pos": 120
      },
      {
        "time": 5284,
        "pos": 120
      },
      {
        "time": 5584,
        "pos": 120
      },
      {
        "time": 5884,
        "pos": 120
      },
      {
        "time": 6184,
        "pos": 120
      },
      {
        "time": 6484,
        "pos": 120
      },
      {
        "time": 6784,
        "pos": 120
      },
      {
        "time": 7084,
        "pos": 120
      },
      {
        "time": 8534,
        "pos": -120
      },
      {
        "time": 8836,
        "pos": -120
      },
      {
        "time": 9152,
        "pos": -120
      },
      {
        "time": 10584,
        "pos": 120
      },
      {
        "time": 10884,
        "pos": 120
      },
      {
        "time": 11184,
        "pos": 120
      },
      {
        "time": 11485,
        "pos": -120
      },
      {
        "time": 11785,
        "pos": -120
      },
      {
        "time": 13001,
        "pos": 120
      },
      {
        "time": 13303,
        "pos": 120
      },
      {
        "time": 13651,
        "pos": -120
      },
      {
        "time": 13951,
        "pos": -120
      },
      {
        "time": 15319,
        "pos": 120
      },
      {
        "time": 15635,
        "pos": 120
      },
      {
        "time": 15935,
        "pos": -120
      },
      {
        "time": 16251,
        "pos": -120
      },
      {
        "time": 16552,
        "pos": 120
      },
      {
        "time": 16852,
        "pos": 120
      },
      {
        "time": 17152,
        "pos": 120
      },
      {
        "time": 17452,
        "pos": 120
      },
      {
        "time": 17852,
        "pos": -120
      },
      {
        "time": 18152,
        "pos": -120
      },
      {
        "time": 18453,
        "pos": -120
      },
      {
        "time": 20019,
        "pos": 120
      },
      {
        "time": 20319,
        "pos": 120
      },
      {
        "time": 20619,
        "pos": -120
      },
      {
        "time": 20919,
        "pos": -120
      },
      {
        "time": 22286,
        "pos": 120
      },
      {
        "time": 22586,
        "pos": 120
      },
      {
        "time": 22886,
        "pos": -120
      },
      {
        "time": 23186,
        "pos": -120
      },
      {
        "time": 24703,
        "pos": 120
      },
      {
        "time": 25003,
        "pos": 120
      },
      {
        "time": 25303,
        "pos": -120
      },
      {
        "time": 25603,
        "pos": -120
      },
      {
        "time": 27003,
        "pos": 120
      },
      {
        "time": 27303,
        "pos": 120
      },
      {
        "time": 27820,
        "pos": 120
      },
      {
        "time": 28120,
        "pos": 120
      },
      {
        "time": 29389,
        "pos": -120
      },
      {
        "time": 29703,
        "pos": -120
      },
      {
        "time": 30604,
        "pos": -120
      },
      {
        "time": 30920,
        "pos": -120
      },
      {
        "time": 31227,
        "pos": -120
      },
      {
        "time": 31537,
        "pos": -120
      },
      {
        "time": 31837,
        "pos": -120
      },
      {
        "time": 32420,
        "pos": 120
      },
      {
        "time": 32720,
        "pos": 120
      },
      {
        "time": 34304,
        "pos": 120
      },
      {
        "time": 34604,
        "pos": 120
      },
      {
        "time": 34904,
        "pos": 120
      },
      {
        "time": 35204,
        "pos": 120
      },
      {
        "time": 35987,
        "pos": -120
      },
      {
        "time": 36287,
        "pos": -120
      },
      {
        "time": 37104,
        "pos": 120
      },
      {
        "time": 37404,
        "pos": 120
      },
      {
        "time": 37704,
        "pos": 120
      },
      {
        "time": 38856,
        "pos": -120
      },
      {
        "time": 39171,
        "pos": -120
      },
      {
        "time": 39471,
        "pos": -120
      },
      {
        "time": 39771,
        "pos": -120
      },
      {
        "time": 40071,
        "pos": 120
      },
      {
        "time": 40371,
        "pos": 120
      },
      {
        "time": 40671,
        "pos": -120
      },
      {
        "time": 40973,
        "pos": -120
      },
      {
        "time": 41288,
        "pos": 120
      },
      {
        "time": 41588,
        "pos": 120
      },
      {
        "time": 41888,
        "pos": -120
      },
      {
        "time": 42188,
        "pos": -120
      },
      {
        "time": 42955,
        "pos": -120
      },
      {
        "time": 43290,
        "pos": -120
      },
      {
        "time": 43605,
        "pos": 120
      },
      {
        "time": 43905,
        "pos": 120
      },
      {
        "time": 44205,
        "pos": 120
      },
      {
        "time": 44505,
        "pos": 120
      },
      {
        "time": 44805,
        "pos": 120
      },
      {
        "time": 46137,
        "pos": 0
      },
      {
        "time": 47137,
        "pos": 0
      },
      {
        "time": 48171,
        "pos": 0
      }
    ]
  },

  { track: 'hellohello',
    title: 'Hello, Hello',
    artist: 'Halcali',
    album: 'Bacon',
    length: '2:24',
    beat: 280,
    beatmap: [
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
      }
    ]
  }
];
