import * as PIXI from "pixi.js";
import { Renderable } from "../game";
import { getBoardHeight } from "../utils";

export default class Paddle implements Renderable {
  static WIDTH = 15;
  static HEIGHT = 150;
  static GUTTER = 10; // the gutter between the paddle and the wall behind it.
  static PADDLE_SPEED = 10;

  isAdded?: boolean;
  pos: Vector = {
    x: 0,
    y: 0,
  };

  graphics: PIXI.DisplayObject;

  constructor() {
    this.graphics = new PIXI.Graphics();
  }

  render() {
    const { graphics } = this;

    // sync graphics position with this position.
    graphics.x = this.pos.x;
    graphics.y = this.pos.y;

    // draw
    graphics.beginFill(0xffffff);
    graphics.drawRect(0, 0, Paddle.WIDTH, Paddle.HEIGHT);
  }

  moveUp() {
    const newPos = Math.max(0, this.pos.y - Paddle.PADDLE_SPEED);
    this.pos.y = newPos;
  }

  moveDown() {
    const newPos = Math.min(
      getBoardHeight() - Paddle.HEIGHT,
      this.pos.y + Paddle.PADDLE_SPEED
    );
    this.pos.y = newPos;
  }
}
