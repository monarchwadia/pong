import * as PIXI from "pixi.js";

export default class Score {
  pos: Vector;
  value: 0;
  private text: PIXI.Text;
  static SIZE = 50;

  constructor(private stage: PIXI.Container) {
    this.pos = {
      x: 0,
      y: 0,
    };
    this.value = 0;

    this.text = new PIXI.Text(this.value.toString(), {
      fontFamily: "Trebuchet MS",
      fontSize: Score.SIZE,
      fill: 0xffffff,
      align: "center",
    });
  }

  render() {
    const { text } = this;

    this.stage.addChild(text);

    // sync graphics position with this position.
    text.x = this.pos.x;
    text.y = this.pos.y;
    text.text = "" + this.value;
  }
}
