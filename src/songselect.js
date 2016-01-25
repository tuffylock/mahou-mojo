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
    beatmap:
      [
        {
          "time": 2566,
          "pos": 0
        },
        {
          "time": 3200,
          "pos": 0
        },
        {
          "time": 3817,
          "pos": 0
        },
        {
          "time": 4400,
          "pos": 0
        },
        {
          "time": 4969,
          "pos": 0
        },
        {
          "time": 5583,
          "pos": 120
        },
        {
          "time": 6186,
          "pos": 0
        },
        {
          "time": 6717,
          "pos": -120
        },
        {
          "time": 7301,
          "pos": 120
        },
        {
          "time": 7934,
          "pos": 120
        },
        {
          "time": 8536,
          "pos": -120
        },
        {
          "time": 9101,
          "pos": -120
        },
        {
          "time": 9684,
          "pos": 0
        },
        {
          "time": 10284,
          "pos": 120
        },
        {
          "time": 10867,
          "pos": -120
        },
        {
          "time": 11436,
          "pos": 120
        },
        {
          "time": 12001,
          "pos": 0
        },
        {
          "time": 12635,
          "pos": 120
        },
        {
          "time": 13168,
          "pos": 0
        },
        {
          "time": 13768,
          "pos": 120
        },
        {
          "time": 14336,
          "pos": 0
        },
        {
          "time": 14934,
          "pos": -120
        },
        {
          "time": 15569,
          "pos": 0
        },
        {
          "time": 16135,
          "pos": -120
        },
        {
          "time": 16651,
          "pos": 0
        },
        {
          "time": 17337,
          "pos": 0
        },
        {
          "time": 17901,
          "pos": -120
        },
        {
          "time": 18518,
          "pos": 120
        },
        {
          "time": 19085,
          "pos": 0
        },
        {
          "time": 19668,
          "pos": 120
        },
        {
          "time": 20285,
          "pos": 120
        },
        {
          "time": 20885,
          "pos": 120
        },
        {
          "time": 21453,
          "pos": 0
        },
        {
          "time": 22069,
          "pos": 120
        },
        {
          "time": 22651,
          "pos": 120
        },
        {
          "time": 23269,
          "pos": 120
        },
        {
          "time": 23802,
          "pos": -120
        },
        {
          "time": 24452,
          "pos": -120
        },
        {
          "time": 25002,
          "pos": 0
        },
        {
          "time": 25552,
          "pos": -120
        },
        {
          "time": 26119,
          "pos": 0
        },
        {
          "time": 26769,
          "pos": -120
        },
        {
          "time": 27371,
          "pos": 0
        },
        {
          "time": 27886,
          "pos": -120
        },
        {
          "time": 28470,
          "pos": 0
        },
        {
          "time": 29086,
          "pos": 0
        },
        {
          "time": 29653,
          "pos": 120
        },
        {
          "time": 30853,
          "pos": 0
        },
        {
          "time": 31486,
          "pos": 0
        },
        {
          "time": 32052,
          "pos": -120
        },
        {
          "time": 33203,
          "pos": 120
        },
        {
          "time": 34036,
          "pos": -120
        },
        {
          "time": 34920,
          "pos": 0
        },
        {
          "time": 35520,
          "pos": 120
        },
        {
          "time": 37954,
          "pos": 0
        },
        {
          "time": 38539,
          "pos": 0
        },
        {
          "time": 39105,
          "pos": -120
        },
        {
          "time": 39687,
          "pos": -120
        },
        {
          "time": 40237,
          "pos": 120
        },
        {
          "time": 40872,
          "pos": -120
        },
        {
          "time": 41437,
          "pos": 120
        },
        {
          "time": 42004,
          "pos": -120
        },
        {
          "time": 42572,
          "pos": 0
        },
        {
          "time": 43438,
          "pos": 0
        },
        {
          "time": 44339,
          "pos": 0
        },
        {
          "time": 44971,
          "pos": 0
        },
        {
          "time": 46138,
          "pos": 120
        },
        {
          "time": 47088,
          "pos": -120
        },
        {
          "time": 48139,
          "pos": 0
        },
        {
          "time": 49291,
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
    beatmap:
      [
        {
          "time": 3884,
          "pos": 0
        },
        {
          "time": 4317,
          "pos": 0
        },
        {
          "time": 4751,
          "pos": 0
        },
        {
          "time": 5184,
          "pos": 0
        },
        {
          "time": 5602,
          "pos": 0
        },
        {
          "time": 6052,
          "pos": 0
        },
        {
          "time": 6468,
          "pos": 0
        },
        {
          "time": 6901,
          "pos": 0
        },
        {
          "time": 7518,
          "pos": 120
        },
        {
          "time": 8168,
          "pos": 120
        },
        {
          "time": 8584,
          "pos": 120
        },
        {
          "time": 9018,
          "pos": 120
        },
        {
          "time": 9451,
          "pos": 120
        },
        {
          "time": 9868,
          "pos": 120
        },
        {
          "time": 10268,
          "pos": 120
        },
        {
          "time": 10703,
          "pos": -120
        },
        {
          "time": 11118,
          "pos": 0
        },
        {
          "time": 11518,
          "pos": 120
        },
        {
          "time": 11953,
          "pos": 0
        },
        {
          "time": 12801,
          "pos": 0
        },
        {
          "time": 13302,
          "pos": 0
        },
        {
          "time": 13718,
          "pos": 0
        },
        {
          "time": 14503,
          "pos": 0
        },
        {
          "time": 14935,
          "pos": -120
        },
        {
          "time": 15369,
          "pos": 0
        },
        {
          "time": 16251,
          "pos": 0
        },
        {
          "time": 16654,
          "pos": 120
        },
        {
          "time": 17069,
          "pos": 0
        },
        {
          "time": 17952,
          "pos": 0
        },
        {
          "time": 18402,
          "pos": 0
        },
        {
          "time": 18819,
          "pos": 120
        },
        {
          "time": 19252,
          "pos": 0
        },
        {
          "time": 20119,
          "pos": 0
        },
        {
          "time": 20519,
          "pos": -120
        },
        {
          "time": 20953,
          "pos": 0
        },
        {
          "time": 21436,
          "pos": -120
        },
        {
          "time": 21836,
          "pos": 0
        },
        {
          "time": 22719,
          "pos": 0
        },
        {
          "time": 23503,
          "pos": 0
        },
        {
          "time": 23936,
          "pos": 120
        },
        {
          "time": 24369,
          "pos": 0
        },
        {
          "time": 25236,
          "pos": 0
        },
        {
          "time": 26103,
          "pos": 0
        },
        {
          "time": 26521,
          "pos": 120
        },
        {
          "time": 26953,
          "pos": 120
        },
        {
          "time": 27837,
          "pos": 120
        },
        {
          "time": 28654,
          "pos": 120
        },
        {
          "time": 29087,
          "pos": 0
        },
        {
          "time": 29487,
          "pos": 120
        },
        {
          "time": 30337,
          "pos": 120
        },
        {
          "time": 30820,
          "pos": 0
        },
        {
          "time": 31220,
          "pos": 120
        },
        {
          "time": 32070,
          "pos": -120
        },
        {
          "time": 32939,
          "pos": -120
        },
        {
          "time": 33371,
          "pos": 0
        },
        {
          "time": 33771,
          "pos": -120
        },
        {
          "time": 34604,
          "pos": -120
        },
        {
          "time": 35471,
          "pos": -120
        },
        {
          "time": 35871,
          "pos": 0
        },
        {
          "time": 36305,
          "pos": 120
        },
        {
          "time": 37205,
          "pos": 120
        },
        {
          "time": 37623,
          "pos": 0
        },
        {
          "time": 38071,
          "pos": 0
        },
        {
          "time": 38921,
          "pos": 120
        },
        {
          "time": 39355,
          "pos": 120
        },
        {
          "time": 39755,
          "pos": 0
        },
        {
          "time": 40638,
          "pos": -120
        },
        {
          "time": 41038,
          "pos": -120
        },
        {
          "time": 41438,
          "pos": 0
        },
        {
          "time": 42338,
          "pos": 0
        },
        {
          "time": 42755,
          "pos": 0
        },
        {
          "time": 43172,
          "pos": 120
        },
        {
          "time": 43588,
          "pos": 0
        },
        {
          "time": 44072,
          "pos": 0
        },
        {
          "time": 44539,
          "pos": 0
        },
        {
          "time": 44939,
          "pos": -120
        },
        {
          "time": 45339,
          "pos": -120
        },
        {
          "time": 45740,
          "pos": 0
        },
        {
          "time": 46155,
          "pos": -120
        },
        {
          "time": 46555,
          "pos": 0
        },
        {
          "time": 47039,
          "pos": 120
        },
        {
          "time": 47455,
          "pos": 0
        },
        {
          "time": 48256,
          "pos": 0
        },
        {
          "time": 48656,
          "pos": 120
        },
        {
          "time": 49141,
          "pos": 0
        },
        {
          "time": 50006,
          "pos": 0
        },
        {
          "time": 50456,
          "pos": 120
        },
        {
          "time": 50873,
          "pos": -120
        },
        {
          "time": 51723,
          "pos": -120
        },
        {
          "time": 52139,
          "pos": 0
        },
        {
          "time": 52541,
          "pos": 120
        },
        {
          "time": 53439,
          "pos": 120
        },
        {
          "time": 53856,
          "pos": 0
        },
        {
          "time": 54256,
          "pos": 120
        },
        {
          "time": 55140,
          "pos": 120
        },
        {
          "time": 55590,
          "pos": 120
        },
        {
          "time": 56008,
          "pos": 0
        },
        {
          "time": 56425,
          "pos": 120
        },
        {
          "time": 56840,
          "pos": 0
        },
        {
          "time": 57690,
          "pos": 0
        },
        {
          "time": 58523,
          "pos": 0
        },
        {
          "time": 59442,
          "pos": -120
        },
        {
          "time": 59857,
          "pos": 0
        },
        {
          "time": 60274,
          "pos": 120
        },
        {
          "time": 60692,
          "pos": 0
        },
        {
          "time": 61157,
          "pos": -120
        },
        {
          "time": 61557,
          "pos": 0
        },
        {
          "time": 61974,
          "pos": -120
        },
        {
          "time": 62842,
          "pos": -120
        },
        {
          "time": 63709,
          "pos": -120
        },
        {
          "time": 64541,
          "pos": -120
        },
        {
          "time": 65391,
          "pos": -120
        },
        {
          "time": 65824,
          "pos": 0
        },
        {
          "time": 66226,
          "pos": 120
        },
        {
          "time": 67109,
          "pos": 120
        },
        {
          "time": 67941,
          "pos": 120
        },
        {
          "time": 68743,
          "pos": 120
        },
        {
          "time": 69158,
          "pos": -120
        },
        {
          "time": 69608,
          "pos": 120
        },
        {
          "time": 70542,
          "pos": 120
        },
        {
          "time": 71341,
          "pos": -120
        },
        {
          "time": 72208,
          "pos": -120
        },
        {
          "time": 73075,
          "pos": -120
        },
        {
          "time": 73892,
          "pos": -120
        },
        {
          "time": 74342,
          "pos": -120
        },
        {
          "time": 74742,
          "pos": -120
        },
        {
          "time": 75625,
          "pos": 0
        },
        {
          "time": 76060,
          "pos": 0
        },
        {
          "time": 76492,
          "pos": 0
        },
        {
          "time": 77376,
          "pos": 120
        },
        {
          "time": 77777,
          "pos": 0
        },
        {
          "time": 78178,
          "pos": 120
        },
        {
          "time": 78609,
          "pos": 0
        },
        {
          "time": 79042,
          "pos": 0
        },
        {
          "time": 79893,
          "pos": 0
        },
        {
          "time": 80726,
          "pos": 0
        },
        {
          "time": 81126,
          "pos": -120
        },
        {
          "time": 81544,
          "pos": 0
        },
        {
          "time": 82409,
          "pos": 0
        },
        {
          "time": 83259,
          "pos": 0
        },
        {
          "time": 83676,
          "pos": 120
        },
        {
          "time": 84093,
          "pos": 0
        },
        {
          "time": 84943,
          "pos": 0
        },
        {
          "time": 85845,
          "pos": 0
        },
        {
          "time": 86643,
          "pos": 0
        },
        {
          "time": 87043,
          "pos": 120
        },
        {
          "time": 87444,
          "pos": 0
        },
        {
          "time": 88361,
          "pos": 0
        },
        {
          "time": 89177,
          "pos": 0
        },
        {
          "time": 90012,
          "pos": -120
        },
        {
          "time": 90444,
          "pos": 0
        },
        {
          "time": 90877,
          "pos": 120
        },
        {
          "time": 91711,
          "pos": 120
        },
        {
          "time": 92561,
          "pos": 120
        },
        {
          "time": 93427,
          "pos": 120
        },
        {
          "time": 93844,
          "pos": 0
        },
        {
          "time": 94261,
          "pos": -120
        },
        {
          "time": 95094,
          "pos": -120
        },
        {
          "time": 95997,
          "pos": 0
        },
        {
          "time": 96594,
          "pos": 120
        },
        {
          "time": 97278,
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
    beatmap:
      [
        {
          "time": 3001,
          "pos": 0
        },
        {
          "time": 5334,
          "pos": 0
        },
        {
          "time": 7768,
          "pos": 0
        },
        {
          "time": 8370,
          "pos": 0
        },
        {
          "time": 8935,
          "pos": 120
        },
        {
          "time": 9503,
          "pos": -120
        },
        {
          "time": 10101,
          "pos": 0
        },
        {
          "time": 11335,
          "pos": -120
        },
        {
          "time": 11918,
          "pos": -120
        },
        {
          "time": 12535,
          "pos": 0
        },
        {
          "time": 13735,
          "pos": 120
        },
        {
          "time": 14854,
          "pos": 0
        },
        {
          "time": 16054,
          "pos": 0
        },
        {
          "time": 17254,
          "pos": 120
        },
        {
          "time": 17853,
          "pos": -120
        },
        {
          "time": 18386,
          "pos": 120
        },
        {
          "time": 18986,
          "pos": -120
        },
        {
          "time": 19603,
          "pos": 0
        },
        {
          "time": 20219,
          "pos": 0
        },
        {
          "time": 20836,
          "pos": 0
        },
        {
          "time": 21403,
          "pos": 0
        },
        {
          "time": 22020,
          "pos": -120
        },
        {
          "time": 22620,
          "pos": 120
        },
        {
          "time": 23219,
          "pos": -120
        },
        {
          "time": 23770,
          "pos": 120
        },
        {
          "time": 24386,
          "pos": 0
        },
        {
          "time": 24986,
          "pos": 0
        },
        {
          "time": 25572,
          "pos": 0
        },
        {
          "time": 26170,
          "pos": 0
        },
        {
          "time": 26753,
          "pos": 120
        },
        {
          "time": 27370,
          "pos": -120
        },
        {
          "time": 27954,
          "pos": 120
        },
        {
          "time": 28537,
          "pos": -120
        },
        {
          "time": 29139,
          "pos": 0
        },
        {
          "time": 29754,
          "pos": 0
        },
        {
          "time": 30354,
          "pos": 0
        },
        {
          "time": 30954,
          "pos": 0
        },
        {
          "time": 31471,
          "pos": -120
        },
        {
          "time": 32087,
          "pos": 120
        },
        {
          "time": 32688,
          "pos": -120
        },
        {
          "time": 33304,
          "pos": 120
        },
        {
          "time": 33904,
          "pos": 0
        },
        {
          "time": 34506,
          "pos": 0
        },
        {
          "time": 35104,
          "pos": 0
        },
        {
          "time": 35674,
          "pos": 0
        },
        {
          "time": 36254,
          "pos": 120
        },
        {
          "time": 36838,
          "pos": -120
        },
        {
          "time": 37455,
          "pos": 120
        },
        {
          "time": 38006,
          "pos": -120
        },
        {
          "time": 38588,
          "pos": 0
        },
        {
          "time": 39822,
          "pos": 0
        },
        {
          "time": 40422,
          "pos": -120
        },
        {
          "time": 41022,
          "pos": -120
        },
        {
          "time": 42205,
          "pos": -120
        },
        {
          "time": 42839,
          "pos": 0
        },
        {
          "time": 43388,
          "pos": -120
        },
        {
          "time": 44005,
          "pos": -120
        },
        {
          "time": 44606,
          "pos": 0
        },
        {
          "time": 45188,
          "pos": -120
        },
        {
          "time": 45772,
          "pos": -120
        },
        {
          "time": 46341,
          "pos": 120
        },
        {
          "time": 46988,
          "pos": 0
        },
        {
          "time": 47541,
          "pos": 120
        },
        {
          "time": 48122,
          "pos": 0
        },
        {
          "time": 48756,
          "pos": 120
        },
        {
          "time": 49356,
          "pos": 120
        },
        {
          "time": 49956,
          "pos": 120
        },
        {
          "time": 50523,
          "pos": 0
        },
        {
          "time": 51123,
          "pos": 120
        },
        {
          "time": 51725,
          "pos": 120
        },
        {
          "time": 52341,
          "pos": 0
        },
        {
          "time": 52923,
          "pos": -120
        },
        {
          "time": 53473,
          "pos": 120
        },
        {
          "time": 54092,
          "pos": -120
        },
        {
          "time": 54692,
          "pos": 120
        },
        {
          "time": 55290,
          "pos": 0
        },
        {
          "time": 56507,
          "pos": 0
        },
        {
          "time": 57107,
          "pos": 0
        },
        {
          "time": 57674,
          "pos": 120
        },
        {
          "time": 58824,
          "pos": 120
        },
        {
          "time": 59440,
          "pos": 0
        },
        {
          "time": 60074,
          "pos": 120
        },
        {
          "time": 60641,
          "pos": 0
        },
        {
          "time": 61291,
          "pos": -120
        },
        {
          "time": 61841,
          "pos": 0
        },
        {
          "time": 62393,
          "pos": -120
        },
        {
          "time": 62957,
          "pos": -120
        },
        {
          "time": 63558,
          "pos": 0
        },
        {
          "time": 64158,
          "pos": 120
        },
        {
          "time": 64774,
          "pos": 0
        },
        {
          "time": 65341,
          "pos": 120
        },
        {
          "time": 65941,
          "pos": 0
        },
        {
          "time": 66526,
          "pos": 120
        },
        {
          "time": 67142,
          "pos": 0
        },
        {
          "time": 68343,
          "pos": 0
        },
        {
          "time": 68925,
          "pos": -120
        },
        {
          "time": 69543,
          "pos": -120
        },
        {
          "time": 70142,
          "pos": 0
        },
        {
          "time": 70742,
          "pos": -120
        },
        {
          "time": 71358,
          "pos": 120
        },
        {
          "time": 72475,
          "pos": 0
        },
        {
          "time": 73659,
          "pos": 0
        },
        {
          "time": 74242,
          "pos": 0
        },
        {
          "time": 74859,
          "pos": 120
        },
        {
          "time": 75444,
          "pos": 0
        },
        {
          "time": 76025,
          "pos": 120
        },
        {
          "time": 76659,
          "pos": 0
        },
        {
          "time": 77259,
          "pos": 0
        },
        {
          "time": 77893,
          "pos": 0
        },
        {
          "time": 78493,
          "pos": 0
        },
        {
          "time": 79026,
          "pos": -120
        },
        {
          "time": 79611,
          "pos": 120
        },
        {
          "time": 80209,
          "pos": -120
        },
        {
          "time": 80810,
          "pos": 120
        },
        {
          "time": 81410,
          "pos": 0
        },
        {
          "time": 82060,
          "pos": 0
        },
        {
          "time": 82626,
          "pos": 0
        },
        {
          "time": 83160,
          "pos": 0
        },
        {
          "time": 83760,
          "pos": 120
        },
        {
          "time": 84362,
          "pos": -120
        },
        {
          "time": 84977,
          "pos": 120
        },
        {
          "time": 85526,
          "pos": -120
        },
        {
          "time": 86177,
          "pos": -120
        },
        {
          "time": 86762,
          "pos": 0
        },
        {
          "time": 87360,
          "pos": 120
        },
        {
          "time": 87960,
          "pos": 0
        },
        {
          "time": 88560,
          "pos": -120
        },
        {
          "time": 89194,
          "pos": -120
        },
        {
          "time": 89744,
          "pos": 120
        },
        {
          "time": 90345,
          "pos": 120
        },
        {
          "time": 90861,
          "pos": 0
        },
        {
          "time": 91477,
          "pos": 120
        },
        {
          "time": 92111,
          "pos": 0
        },
        {
          "time": 92678,
          "pos": -120
        },
        {
          "time": 93244,
          "pos": 120
        },
        {
          "time": 93944,
          "pos": -120
        },
        {
          "time": 94478,
          "pos": 120
        },
        {
          "time": 95046,
          "pos": -120
        },
        {
          "time": 95611,
          "pos": 0
        },
        {
          "time": 96845,
          "pos": 0
        },
        {
          "time": 97462,
          "pos": -120
        },
        {
          "time": 98028,
          "pos": 0
        },
        {
          "time": 98595,
          "pos": -120
        },
        {
          "time": 99228,
          "pos": -120
        },
        {
          "time": 99814,
          "pos": 0
        },
        {
          "time": 100414,
          "pos": 120
        },
        {
          "time": 101012,
          "pos": 0
        },
        {
          "time": 101612,
          "pos": 120
        },
        {
          "time": 102229,
          "pos": 120
        },
        {
          "time": 102862,
          "pos": 0
        },
        {
          "time": 103414,
          "pos": 0
        },
        {
          "time": 104028,
          "pos": 120
        },
        {
          "time": 104596,
          "pos": 0
        },
        {
          "time": 105128,
          "pos": -120
        },
        {
          "time": 106579,
          "pos": -120
        },
        {
          "time": 106996,
          "pos": -120
        },
        {
          "time": 107563,
          "pos": -120
        },
        {
          "time": 108163,
          "pos": 0
        },
        {
          "time": 108763,
          "pos": -120
        },
        {
          "time": 109346,
          "pos": -120
        },
        {
          "time": 109929,
          "pos": 120
        },
        {
          "time": 111080,
          "pos": 120
        },
        {
          "time": 112296,
          "pos": 120
        },
        {
          "time": 112896,
          "pos": 0
        },
        {
          "time": 113513,
          "pos": 0
        },
        {
          "time": 114113,
          "pos": 0
        },
        {
          "time": 114680,
          "pos": 0
        },
        {
          "time": 115880,
          "pos": 0
        },
        {
          "time": 116481,
          "pos": 120
        },
        {
          "time": 117096,
          "pos": 120
        },
        {
          "time": 117714,
          "pos": 0
        },
        {
          "time": 118347,
          "pos": -120
        },
        {
          "time": 118865,
          "pos": -120
        },
        {
          "time": 119431,
          "pos": -120
        },
        {
          "time": 120033,
          "pos": 0
        },
        {
          "time": 120631,
          "pos": -120
        },
        {
          "time": 121217,
          "pos": 0
        },
        {
          "time": 121747,
          "pos": 120
        },
        {
          "time": 122399,
          "pos": 120
        },
        {
          "time": 123000,
          "pos": 0
        },
        {
          "time": 123614,
          "pos": 0
        },
        {
          "time": 124198,
          "pos": 120
        },
        {
          "time": 125364,
          "pos": 0
        },
        {
          "time": 126015,
          "pos": 0
        },
        {
          "time": 127164,
          "pos": 0
        },
        {
          "time": 127765,
          "pos": 0
        },
        {
          "time": 128348,
          "pos": -120
        },
        {
          "time": 128866,
          "pos": 120
        },
        {
          "time": 129567,
          "pos": -120
        },
        {
          "time": 130132,
          "pos": -120
        },
        {
          "time": 130698,
          "pos": 0
        },
        {
          "time": 131300,
          "pos": -120
        },
        {
          "time": 131915,
          "pos": 0
        },
        {
          "time": 132499,
          "pos": 0
        },
        {
          "time": 133049,
          "pos": 120
        },
        {
          "time": 133699,
          "pos": -120
        },
        {
          "time": 134351,
          "pos": 120
        },
        {
          "time": 134866,
          "pos": 120
        },
        {
          "time": 135466,
          "pos": 0
        },
        {
          "time": 137816,
          "pos": 0
        },
        {
          "time": 140151,
          "pos": 0
        },
        {
          "time": 142467,
          "pos": 0
        }
      ]
  }
];
