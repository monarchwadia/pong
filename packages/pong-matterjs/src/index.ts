import Matter from "matter-js";
const { Engine, Render, World, Bodies, Runner } = Matter;

const WIDTH = 800;
const HEIGHT = 600;
const WALL_THICKNESS = 20;

const engine = Engine.create();
engine.world.gravity.y = 0;

const boxA = Bodies.rectangle(400, 200, 80, 80);
const boxB = Bodies.rectangle(450, 50, 80, 80);

const wall = (x: number, y: number, width: number, height: number) =>
  Bodies.rectangle(x, y, width, height, {
    isStatic: true,
    render: {
      fillStyle: "#868e96",
    },
  });

const walls = [
  wall(WIDTH / 2, 0, WIDTH, WALL_THICKNESS), // top
  wall(WIDTH / 2, HEIGHT, WIDTH, WALL_THICKNESS), // bottom
  wall(0, HEIGHT / 2, WALL_THICKNESS, HEIGHT), // left
  wall(WIDTH, HEIGHT / 2, WALL_THICKNESS, HEIGHT), // right
];

World.add(engine.world, [boxA, boxB, ...walls]);

const runner = Runner.create();
Runner.run(runner, engine);

const render = Render.create({
  element: document.body,
  engine,
  options: {
    width: WIDTH,
    height: HEIGHT,
    background: "#000000",
    wireframes: false,
  },
});
Render.run(render);
