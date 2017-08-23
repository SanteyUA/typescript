/// <reference path="../lib/phaser.d.ts" />
/// <reference path="Boot.ts" />
/// <reference path="Game.ts" />


module GameName {
	
	export class Preloader extends Phaser.State {
		
		preload () {
			//add assets
			//this.game.load.image("key", "path.to.image");
		}

		create () {
			this.initStates();
			this.setScale();

			this.game.state.start("Boot");
		}

		initStates () {
			this.game.state.add("Boot", Boot);
			this.game.state.add("Game", Game);
		}

		setScale () {
			this.game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
		}

	}

}