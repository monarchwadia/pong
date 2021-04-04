import Matter from "matter-js";
import { width, height, wallThickness } from "./constants";
import wall from "./wall";
const { Engine, Render, Runner, World, Bodies, Body } = Matter;

export default class Context {
  engine: Matter.Engine;
  runner: Matter.Runner;
  render: Matter.Render;

  init() {
    // setup basic MatterJS constructs
    this.engine = Engine.create();
    this.runner = Runner.create();
    this.render = Render.create({
      element: document.body,
      engine: this.engine,
      options: {
        width,
        height,
        background: "#000000",
        wireframes: false,
      },
    });
    this.setGravity({
      x: 0,
      y: 0,
      scale: 0,
    });

    const walls = {
      top: wall(width / 2, 0, width, wallThickness),
      bottom: wall(width / 2, height, width, wallThickness),
      left: wall(0, height / 2, wallThickness, height, true),
      right: wall(width, height / 2, wallThickness, height, true),
    };
    this.addBodies(...Object.values(walls));

    // start matterjs
    Runner.run(this.runner, this.engine);
    Render.run(this.render);
  }

  addBodies(...bodies: Matter.Body[]) {
    World.add(this.engine.world, bodies);
  }

  setGravity(opts: { x: number; y: number; scale: number }) {
    const { x, y, scale } = opts;

    if (x !== undefined) {
      this.engine.world.gravity.x = x;
    }
    if (y !== undefined) {
      this.engine.world.gravity.y = y;
    }
    if (scale !== undefined) {
      this.engine.world.gravity.scale = scale;
    }
  }
}
