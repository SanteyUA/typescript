/// <reference path="lib/phaser.d.ts" />
/// <reference path="states/Preloader.ts" />
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
(function (GameName_1) {
    var GameName = (function (_super) {
        __extends(GameName, _super);
        function GameName(width, height) {
            return _super.call(this, width, height, Phaser.AUTO, "game", State) || this;
        }
        return GameName;
    }(Phaser.Game));
    var State = (function (_super) {
        __extends(State, _super);
        function State() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        State.prototype.create = function () {
            this.game.state.add("Preloader", GameName_1.Preloader, true);
        };
        return State;
    }(Phaser.State));
    window.onload = function () {
        new GameName(1280, 720);
    };
})(GameName || (GameName = {}));
