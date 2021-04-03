import * as PIXI from "pixi.js";
import { Renderable } from "../game";

export default class Score implements Renderable {
  pos: Vector;
  value: 0;
  static SIZE = 100;

  graphics: PIXI.Text;
  isAdded?: boolean;

  constructor() {
    this.pos = {
      x: 0,
      y: 0,
    };
    this.value = 0;

    this.graphics = new PIXI.Text(this.value.toString(), {
      fontFamily: "Trebuchet MS",
      fontSize: Score.SIZE,
      fill: 0xffffff,
      align: "center",
    });
  }
  initialDraw(): void {
    // do nothing
  }

  render() {
    const { graphics } = this;

    // sync graphics position with this position.
    graphics.x = this.pos.x;
    graphics.y = this.pos.y;
  }
}
