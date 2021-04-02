import * as PIXI from "pixi.js";

const app = new PIXI.Application({
  antialias: true, // what is anti aliasing?
});
app.stage.interactive = true;
document.body.appendChild(app.view);
window.app = app;

const graphics = new PIXI.Graphics();

// add a moving rectangle
const thing = new PIXI.Graphics();
app.stage.addChild(thing);
thing.x = 800 / 2;
thing.y = 600 / 2;

let count = 0;

app.renderer.plugins.interaction.on("pointerdown", () => {
  graphics.lineStyle(Math.random() * 30, Math.random() * 0xffffff, 1);
  graphics.moveTo(Math.random() * 800, Math.random() * 600);
  graphics.bezierCurveTo(
    Math.random * 800,
    Math.random * 600,
    Math.random * 800,
    Math.random * 600,
    Math.random * 800,
    Math.random * 600
  );
});

app.ticker.add(() => {
  count += 0.1;

  thing.clear();
  thing.lineStyle(10, 0xff0000, 1);
  thing.beginFill(0xffff00, 0.5);
  thing.moveTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);
  thing.lineTo(120 + Math.cos(count) * 20, -100 + Math.sin(count) * 20);
  thing.lineTo(120 + Math.sin(count) * 20, 100 + Math.cos(count) * 20);
  thing.lineTo(-120 + Math.cos(count) * 20, 100 + Math.sin(count) * 20);
  thing.lineTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);
  thing.closePath();

  thing.rotation = count * 0.1;
});
