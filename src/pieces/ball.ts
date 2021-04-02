import * as PIXI from "pixi.js";

export default class Ball {
  static RADIUS = 10;

  pos: Vector = {
    x: 0,
    y: 0,
  };

  vel: Vector = {
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
    graphics.beginFill(0xff0000);
    graphics.drawCircle(0, 0, Ball.RADIUS);
  }
}
