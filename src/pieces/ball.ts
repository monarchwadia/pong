import * as PIXI from "pixi.js";
import { Renderable } from "../game";

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
}
