import * as PIXI from "pixi.js";
import { getBoardHeight } from "../utils";

export default class Paddle {
  static WIDTH = 15;
  static HEIGHT = 150;
  static GUTTER = 10; // the gutter between the paddle and the wall behind it.
  static PADDLE_SPEED = 10;

  pos: Vector = {
    x: 0,
    y: 0,
  };

  private graphics: PIXI.Graphics;

  constructor(private stage: PIXI.Container) {
    this.graphics = new PIXI.Graphics();
  }

  render() {
    const { graphics } = this;

    this.stage.addChild(graphics);

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
