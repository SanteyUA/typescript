/// <reference path="lib/phaser.d.ts" />
var GameName;
(function (GameName_1) {
    class GameName extends Phaser.Game {
        constructor(width, height) {
            super(width, height, Phaser.AUTO, "game", Phaser.State);
        }
    }
    window.onload = () => {
        new GameName(1280, 720);
    };
})(GameName || (GameName = {}));
