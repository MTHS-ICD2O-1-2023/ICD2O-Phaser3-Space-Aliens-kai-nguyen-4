/* global phaser */

// Copyright (c) 2024 Kai Nguyen All rights reserved
//
// Created by: Kai Nguyen
// Created on: Apr 2024
// This is the Game Scene

/**
 * This class is the Game Scene
 */
class GameScene extends Phaser.Scene {
  /**
   * This method is the constructor
   */
  constructor() {
    super({ key: "gameScene" })

    this.background = null
    this.ship = null
  }

  /**
   * Can be defined on your own Scenes
   * This method is called by the Scene Manager when the gstarts,
   * before preload() and create()
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
   */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  /**
   * Can be defined on your own Scenes
   * Use it to load assets
   */
  preload() {
    console.log("Game Scene")

    // Images
    this.load.image("starBackground", "./assets/starBackground.png")
    this.load.image("ship", "./assets/spaceShip.png")
    this.load.image("missle", "./assets/missle.png")
  }

  /**
   * Can be defined on your own Scenes
   * Use it to create your game objects
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
   */
  create(data) {
    this.background = this.add.image(0, 0, "starBackground").setScale(2.0)
    this.background.setOrigin(0, 0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "ship")

    // Create a group for the missles
    this.missleGroup = this.physics.add.group()
  }

  /**
   * Should be overridden by your own Scenes
   * This method is called once per game step while the scene is running
   * @param {number} time - The current time
   * @param {number} delta - The delta time in ms since the last frame
   */
  update(time, delta) {
    const keyLeftObj = this.input.keyboard.addKey("LEFT")
    const keyRightObj = this.input.keyboard.addKey("RIGHT")
    const keySpaceObj = this.input.keyboard.addKey("SPACE")

    if (keyLeftObj.isDown === true) {
      this.ship.x -= 15
      if (this.ship.x < 0) {
        this.ship.x = 0
      }
    }
    if (keyRightObj.isDown === true) {
      this.ship.x += 15
      if (this.ship.x > 1920) {
        this.ship.x = 1920
      }
    }
    if (keySpaceObj.isDown === true) {
      if (this.fireMissile === false) {
        // Fire missle
        this.fireMissile = true
        const aNewMissle = this.physics.add.sprite(this.ship.x, this.ship.y, 'missile')
        this.missleGroup.add(aNewMissle)
      }
    }
    if (keySpaceObj,isUp === true) {
      this.fireMissile = false
    }
  }
}

export default GameScene
