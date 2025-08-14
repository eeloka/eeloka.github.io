BasicGame = {};

BasicGame.Boot = function (game) {

};

BasicGame.Boot.prototype = {

	preload: function () {

		this.load.image('preloader_background', 'assets/images/preloader_background.png');
		this.load.image('preloader_bar', 'assets/images/preloader_bar.png');

	},

	create: function () {


		this.game.input.maxPointers = 1;


		this.game.stage.disableVisibilityChange = true;

	    if (this.game.device.desktop)
	    {

		    this.game.stage.scale.pageAlignHorizontally = true;
	    }
	    else
	    {

		    this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
		    this.game.stage.scale.minWidth = 480;
		    this.game.stage.scale.minHeight = 260;
		    this.game.stage.scale.maxWidth = 1024;
		    this.game.stage.scale.maxHeight = 768;
		    this.game.stage.scale.forceLandscape = true;
		    this.game.stage.scale.pageAlignHorizontally = true;
		    this.game.stage.scale.setScreenSize(true);
	    }

      

		this.game.state.start('Preloader');

	}

};
