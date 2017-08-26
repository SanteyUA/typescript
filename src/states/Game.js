/// <reference path="../lib/phaser.d.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameName;
(function (GameName) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Game.prototype.preload = function () {
        };
        Game.prototype.create = function () {
            var bmd = this.game.add.bitmapData(200, 200);
            bmd.context.beginPath();
            bmd.context.fillStyle = "#FFFF00";
            bmd.context.strokeStyle = "#0000FF";
            bmd.context.lineWidth = 35;
            bmd.context.arc(bmd.width / 2, bmd.height / 2, 75, 0, Math.PI * 2);
            bmd.context.closePath();
            bmd.context.fill();
            bmd.context.stroke();
            this.bmdSprite = this.game.add.sprite(this.game.width - 100, this.game.height / 2, bmd);
            this.bmdSprite.anchor.setTo(0.5);
            var alphaTween = this.game.add.tween(this.bmdSprite);
            alphaTween.to({ x: 100 }, 1000, Phaser.Easing.Bounce.Out, true, 1000, 1, true);
            alphaTween.start();
        };
        Game.prototype.update = function () {
        };
        return Game;
    }(Phaser.State));
    GameName.Game = Game;
})(GameName || (GameName = {}));
