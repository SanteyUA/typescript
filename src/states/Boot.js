/// <reference path="../lib/phaser.d.ts" />
var GameName;
(function (GameName) {
    class Boot extends Phaser.State {
        preload() {
            this.game.load.image("logo", "/assets/logo.jfif");
        }
        create() {
            var bootLogo = this.game.add.image(this.game.width * 0.5, this.game.height * 0.5, "logo");
        }
    }
})(GameName || (GameName = {}));
