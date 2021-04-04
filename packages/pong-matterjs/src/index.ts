import Matter, { Bodies } from "matter-js";
import { height, width, wallThickness, paddleGutter } from "./constants";
import Context from "./context";
import ball from "./ball";
import paddle from "./paddle";

const context = new Context();
context.init();

const b = ball(500, 500, 10);
const user = paddle(wallThickness + paddleGutter, height / 2);
const cpu = paddle(width - wallThickness - paddleGutter, height / 2);

Matter.Body.setVelocity(b, {
  x: 5,
  y: 5,
});

context.addBodies(b, user, cpu);
