/// <reference path="../lib/phaser.d.ts" />

module GameName {

	class Boot extends Phaser.State {

		preload () {
			this.game.load.image("logo", "/assets/logo.jfif");
		}

		create () {
			var bootLogo: Phaser.Image = this.game.add.image(this.game.width * 0.5, this.game.height * 0.5, "logo");
		}

	}

}