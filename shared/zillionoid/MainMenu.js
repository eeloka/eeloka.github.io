
BasicGame.MainMenu = function (game) {

	this.music = null;
	this.play_button = null;

};

BasicGame.MainMenu.prototype = {

	create: function () {



		this.add.sprite(150, 50, 'titlepage');

		this.play_button = this.add.button(450, 300, 'start_button', this.startGame, this, 1, 0, 2);

	},

	update: function () {


	},

	startGame: function (pointer) {


		this.game.state.start('Game');

	}

};
