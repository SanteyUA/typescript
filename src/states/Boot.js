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
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Boot.prototype.preload = function () {
            this.game.load.image("logo", "/assets/logo.jfif");
        };
        Boot.prototype.create = function () {
            var _this = this;
            var bootLogo = this.game.add.image(this.game.width * 0.5, this.game.height * 0.5, "logo");
            bootLogo.anchor.setTo(0.5, 0.5);
            this.game.time.events.add(2000, function () {
                _this.game.state.start("Game");
            }, this); /// <reference path="../lib/phaser.d.ts" />
        };
        return Boot;
    }(Phaser.State));
    GameName.Boot = Boot;
})(GameName || (GameName = {}));
