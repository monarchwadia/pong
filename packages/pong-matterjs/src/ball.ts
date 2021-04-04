import Matter from "matter-js";
import { height, width } from "./constants";

const DEFAULT_Y = height / 2;
const DEFAULT_X = width / 2;
const DEFAULT_RADIUS = 10;

const ball = () =>
  Matter.Bodies.circle(DEFAULT_X, DEFAULT_Y, DEFAULT_RADIUS, {
    restitution: 1,
    friction: 0,
    frictionAir: 0,
    frictionStatic: 0,
    density: 1,
    inertia: Infinity,
    render: {
      fillStyle: "#ff0000",
    },
  });
export default ball;

export const resetBall = (ball: Matter.Body) => {
  Matter.Body.setPosition(ball, { x: DEFAULT_X, y: DEFAULT_Y });
};
