/// <reference path="lib/phaser.d.ts" />

module GameName {

  class GameName extends Phaser.Game {

    constructor(width?:number, height?:number) {
      super(width, height, Phaser.AUTO, "game", Phaser.State);
    }

  }



  window.onload = () => {
    new GameName(1280, 720);
  };

}