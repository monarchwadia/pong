import * as PIXI from "pixi.js";
import Ball from "./pieces/ball";
import Paddle from "./pieces/paddle";
import Score from "./pieces/score";
import { getBoardHeight, getBoardWidth } from "./utils";

type Player = {
  paddle: Paddle;
  score: Score;
};

export default class Game {
  user: Player;
  cpu: Player;
  ball: Ball;

  constructor(private stage: PIXI.Container) {
    this.reset();
  }

  reset() {
    const game = this;
    const { stage } = this;

    game.user = {
      paddle: undefined,
      score: undefined,
    };
    game.cpu = {
      paddle: undefined,
      score: undefined,
    };
    game.ball = undefined;

    // ADD USER PADDLE
    const userPaddle = new Paddle(stage);
    userPaddle.pos.x = Paddle.GUTTER;
    userPaddle.pos.y = 0.15 * getBoardHeight();
    game.user.paddle = userPaddle;

    // ADD CPU PADDLE
    const cpuPaddle = new Paddle(stage);
    cpuPaddle.pos.x = getBoardWidth() - Paddle.GUTTER - Paddle.WIDTH;
    cpuPaddle.pos.y = (getBoardHeight() - Paddle.HEIGHT) * 0.75;
    game.cpu.paddle = cpuPaddle;

    // ADD BALL
    const ball = new Ball(stage);
    ball.pos.x = getBoardWidth() / 2;
    ball.pos.y = getBoardHeight() / 2;
    game.ball = ball;

    // ADD USER SCORE
    const userScore = new Score(stage);
    userScore.value = 0;
    userScore.pos.x = getBoardWidth() * 0.35;
    userScore.pos.y = 25;
    game.user.score = userScore;

    // ADD CPU SCORE
    const cpuScore = new Score(stage);
    cpuScore.value = 0;
    cpuScore.pos.x = getBoardWidth() * 0.6;
    cpuScore.pos.y = 25;
    game.cpu.score = cpuScore;
  }

  update() {
    const { ball } = this;
    ball.pos.x += ball.vel.x;
    ball.pos.y += ball.vel.y;
  }

  render() {
    [
      this.user.paddle,
      this.user.score,
      this.cpu.paddle,
      this.cpu.score,
      this.ball,
    ].forEach((x) => x.render());
  }
}
