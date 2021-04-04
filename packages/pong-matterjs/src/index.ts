import Matter, { Bodies } from "matter-js";
import Context from "./context";

const context = new Context();
context.init();

const ball = Matter.Bodies.circle(500, 500, 10, {
  restitution: 1,
  friction: 0,
  frictionAir: 0,
  frictionStatic: 0,
  density: 1,
  inertia: Infinity,
});

Matter.Body.setVelocity(ball, {
  x: 15,
  y: 15,
});

context.addBodies(ball);
