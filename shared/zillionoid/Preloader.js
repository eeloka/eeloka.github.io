
BasicGame.Preloader = function (game) {

	this.background = null;
	this.preload_bar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	preload: function () {


		this.background = this.add.sprite(0, 0, 'preloader_background');
		this.preload_bar = this.add.sprite(150, 300, 'preloader_bar');


		this.load.setPreloadSprite(this.preload_bar);

		this.load.image('titlepage', 'assets/images/title.png');

    this.load.spritesheet('start_button', 'assets/buttons/start_button.png', 200, 70);
    this.load.spritesheet('quit_button', 'assets/buttons/quit_button.png', 200, 70);
		this.load.audio('title_music', ['assets/audio/endure.ogg']);

    this.load.image('pers', 'assets/sprites/pers.png');

	},

	create: function () {
		this.preload_bar.cropEnabled = false;


	},

	update: function () {
		
		if (this.cache.isSoundDecoded('title_music') && this.ready == false)
		{
			this.ready = true;
			this.game.state.start('MainMenu');
		}

	}

};
