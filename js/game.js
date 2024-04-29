/* global phaser */

// Copyright (c) 2024 Kai Nguyen All rights reserved
//
// Created by: Kai Nguyen
// Created on: Apr 2024
// This is the Phaser3 game configuration file

// scene import statements
import SplashScene from "./splashScene.js"
import TitleScene from "./titleScene.js"
import MenuScene from "./menuScene.js"
//create the new scenes
const splashScene = new SplashScene()
const titleScene = new TitleScene()
const menuScene = new MenuScene()
/**
 * Start Phaser Game
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  // Background colour
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)
// console.log(game)

// load notes
// Note: remember any "key" is global and CAN NOT be reused!
game.scene.add("splashScene", splashScene)
game.scene.add("titleScene", titleScene)
game.scene.add("menuScene", menuScene)
// the start scene
game.scene.start("splashScene")
