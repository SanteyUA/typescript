/// <reference path="../lib/phaser.d.ts" />
var TSGame;
(function (TSGame_1) {
    class TSGame extends Phaser.Game {
        constructor() {
            super(800, 600, Phaser.AUTO, "game", State);
        }
    }
    class State extends Phaser.State {
        preload() {
            console.log("Preload");
        }
        create() {
            console.log("create");
        }
        update() {
        }
    }
    window.onload = () => {
        new TSGame();
    };
})(TSGame || (TSGame = {}));
