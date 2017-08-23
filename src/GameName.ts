/// <reference path="lib/phaser.d.ts" />
/// <reference path="states/Preloader.ts" />

module GameName {

	class GameName extends Phaser.Game {
		
		constructor(width?:number, height?:number) {
			super(width, height, Phaser.AUTO, "game", State);
		}

	}
	
	class State extends Phaser.State {
		
		create() {
			this.game.state.add("Preloader", Preloader, true);
		}

	}

	window.onload = () => {
		new GameName(1280, 720);
	}

}