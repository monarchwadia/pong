import * as PIXI from "pixi.js";
import Paddle from "./pieces/paddle";

declare global {
  interface Window {
    app: PIXI.Application;
  }
}

const BOARD_WIDTH = 800;
const BOARD_HEIGHT = 600;

// START RENDERER
const app = new PIXI.Application({
  antialias: true, // what is anti aliasing?
});
app.stage.interactive = true;
document.body.appendChild(app.view);
window.app = app;

// ADD PADDLES
const user = new Paddle(app.stage);
user.x = Paddle.GUTTER;
user.y = 0.15 * BOARD_HEIGHT;
user.render();

const cpu = new Paddle(app.stage);
cpu.x = BOARD_WIDTH - Paddle.GUTTER - Paddle.WIDTH;
cpu.y = (BOARD_HEIGHT - Paddle.HEIGHT) * 0.75;
cpu.render();
