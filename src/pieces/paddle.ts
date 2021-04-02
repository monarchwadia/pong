import * as PIXI from "pixi.js";

export default class Paddle {
  x: number;
  y: number;

  static WIDTH = 15;
  static HEIGHT = 150;
  static GUTTER = 10; // the gutter between the paddle and the wall behind it.

  private graphics: PIXI.Graphics = new PIXI.Graphics();

  constructor(private stage: PIXI.Container) {
    const graphics = new PIXI.Graphics();
    this.graphics = graphics;
  }

  render() {
    const { graphics } = this;

    this.stage.addChild(graphics);

    // sync graphics position with this position.
    graphics.x = this.x;
    graphics.y = this.y;

    // draw
    graphics.beginFill(0xffffff);
    graphics.drawRect(0, 0, Paddle.WIDTH, Paddle.HEIGHT);
  }
}
