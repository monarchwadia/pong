import * as PIXI from "pixi.js";
import Controls, { Direction } from "./controls";
import Game from "./game";
import SAT from "sat";

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
  const paddlePoly = (game.user.paddle.getPolygon() as SAT.Box).toPolygon();

  if (SAT.testPolygonCircle(paddlePoly, ballPoly)) {
    game.ball.vel.x = -game.ball.vel.x;
    game.ball.vel.y = -game.ball.vel.y;
  }

  game.update();
  game.render();
})();
