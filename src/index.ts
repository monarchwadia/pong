import * as PIXI from "pixi.js";
import Controls, { Direction } from "./controls";
import Game from "./game";
import SAT from "sat";
import { getBoardHeight, getBoardWidth } from "./utils";
import Ball from "./pieces/ball";

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
  if (
    game.ball.pos.y - Ball.RADIUS <= 0 || // hit top
    game.ball.pos.y + Ball.RADIUS * 2 >= getBoardHeight() // hit bottom
  ) {
    game.ball.vel.y = -game.ball.vel.y;
  }

  // detect collision with left/right walls
  if (game.ball.pos.x - Ball.RADIUS <= 0) {
    // cpu win
    game.cpu.score.increment();
    game.ball.reinitialize(false);
  }

  if (game.ball.pos.x + Ball.RADIUS >= getBoardWidth()) {
    // player win
    game.user.score.increment();
    game.ball.reinitialize(true);
  }

  game.update();
  game.render();
})();
