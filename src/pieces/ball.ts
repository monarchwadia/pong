import * as PIXI from "pixi.js";
import { Renderable } from "../game";
import SAT from "sat";
import { getBoardHeight, getBoardWidth } from "../utils";

export default class Ball implements Renderable {
  static RADIUS = 10;

  isAadded?: boolean;
  pos: Vector = {
    x: 0,
    y: 0,
  };

  vel: Vector = {
    x: 0,
    y: 0,
  };

  graphics: PIXI.Graphics;

  constructor() {
    this.graphics = new PIXI.Graphics();
  }

  render() {
    this.graphics.x = this.pos.x;
    this.graphics.y = this.pos.y;
  }

  initialDraw() {
    const { graphics } = this;
    graphics.beginFill(0xff0000);
    graphics.drawCircle(0, 0, Ball.RADIUS);
  }

  reinitialize(goLeft = true) {
    this.pos.x = getBoardWidth() / 2;
    this.pos.y = getBoardHeight() / 2;
    this.vel.x = Math.random() * 10;
    this.vel.y = Math.random() * 10;

    if (goLeft) {
      this.vel.x = -this.vel.x;
    }
  }

  getPolygon() {
    return new SAT.Circle(new SAT.Vector(this.pos.x, this.pos.y), Ball.RADIUS);
  }
}
