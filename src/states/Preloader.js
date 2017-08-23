/// <reference path="../lib/phaser.d.ts" />
/// <reference path="Boot.ts" />
/// <reference path="Game.ts" />
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
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Preloader.prototype.preload = function () {
            //add assets
            //this.game.load.image("key", "path.to.image");
        };
        Preloader.prototype.create = function () {
            this.initStates();
            this.setScale();
            this.game.state.start("Boot");
        };
        Preloader.prototype.initStates = function () {
            this.game.state.add("Boot", GameName.Boot);
            this.game.state.add("Game", GameName.Game);
        };
        Preloader.prototype.setScale = function () {
            this.game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
        };
        return Preloader;
    }(Phaser.State));
    GameName.Preloader = Preloader;
})(GameName || (GameName = {}));
