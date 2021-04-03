import * as PIXI from "pixi.js";
import Controls, { Direction } from "./controls";
import Game from "./game";

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
    case Direction.Up:
      game.user.paddle.moveUp();
      break;
    case Direction.Down:
      game.user.paddle.moveDown();
      break;
    default:
      break;
  }

  game.update();
  game.render();
})();
