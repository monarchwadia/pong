import * as PIXI from "pixi.js";
import Controls, { Direction } from "./controls";
import Game from "./game";
import SAT from "sat";
import { getBoardHeight, getBoardWidth } from "./utils";
import Ball from "./pieces/ball";
import Paddle from "./pieces/paddle";

declare global {
  interface Window {
    app: PIXI.Application;
  }
}

// START RENDERER
const app = new PIXI.Application({
  antialias: true, // what is anti aliasing?
});
const { stage } = app;
stage.interactive = true;
document.body.appendChild(app.view);

const game = new Game(stage);

const controls = new Controls();
controls.listen();

(function loop() {
  requestAnimationFrame(loop);

  switch (controls.key) {
    // determine user paddle movement
    case Direction.Up:
      game.user.paddle.moveUp();
      break;
    case Direction.Down:
      game.user.paddle.moveDown();
      break;
    default:
      break;
  }

  // detect collision with ball
  const ballPoly = game.ball.getPolygon();
  [game.user.paddle, game.cpu.paddle].forEach((paddle) => {
    const paddlePoly = (paddle.getPolygon() as SAT.Box).toPolygon();
    if (SAT.testPolygonCircle(paddlePoly, ballPoly)) {
      game.ball.vel.x = -game.ball.vel.x;
      // game.ball.vel.y = -game.ball.vel.y;
    }
  });

  // detect collision with top/bottom walls
  const ballDim = game.ball.getDimensions();
  if (
    ballDim.top <= 0 || // hit top
    ballDim.bottom >= getBoardHeight() // hit bottom
  ) {
    game.ball.vel.y = -game.ball.vel.y;
  }

  // detect collision with left/right walls
  if (ballDim.left <= 0) {
    // cpu win
    game.cpu.score.increment();
    game.ball.reinitialize(false);
  }

  if (ballDim.right >= getBoardWidth()) {
    // player win
    game.user.score.increment();
    game.ball.reinitialize(true);
  }

  // cpu move
  if (ballDim.top < game.cpu.paddle.pos.y) {
    game.cpu.paddle.moveUp();
  } else if (ballDim.bottom > game.cpu.paddle.pos.y + Paddle.HEIGHT) {
    game.cpu.paddle.moveDown();
  }

  game.update();
  game.render();
})();
