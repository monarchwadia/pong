import * as PIXI from "pixi.js";
import Ball from "./pieces/ball";
import Paddle from "./pieces/paddle";
import Score from "./pieces/score";

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
user.pos.x = Paddle.GUTTER;
user.pos.y = 0.15 * BOARD_HEIGHT;
user.render();

const cpu = new Paddle(app.stage);
cpu.pos.x = BOARD_WIDTH - Paddle.GUTTER - Paddle.WIDTH;
cpu.pos.y = (BOARD_HEIGHT - Paddle.HEIGHT) * 0.75;
cpu.render();

// ADD BALL
const ball = new Ball(app.stage);
ball.pos.x = BOARD_WIDTH / 2;
ball.pos.y = BOARD_HEIGHT / 2;
ball.render();

// ADD SCORES
const userScore = new Score(app.stage);
userScore.value = 0;
userScore.pos.x = BOARD_WIDTH * 0.4;
userScore.pos.y = 25;
userScore.render();

// ADD SCORES
const cpuScore = new Score(app.stage);
cpuScore.value = 0;
cpuScore.pos.x = BOARD_WIDTH * 0.6;
cpuScore.pos.y = 25;
cpuScore.render();
