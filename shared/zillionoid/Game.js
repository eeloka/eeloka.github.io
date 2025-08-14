
BasicGame.Game = function (game) {

};

BasicGame.Game.prototype = {

	create: function () {
  
  this.music = this.add.audio('title_music');
	this.music.play();
  this.quit_button = this.add.button(450, 300, 'quit_button', this.quitGame, this, 1, 0, 2);


    p = this.game.add.emitter(this.game.world.centerX, 200, 200);
    p.makeParticles('pers');
    p.start(false, 5000, 20);

	},

	update: function () {



	},

	quitGame: function (pointer) {

    this.music.stop();
    

		this.game.state.start('MainMenu');

	}

};
