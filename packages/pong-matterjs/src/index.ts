import Matter from "matter-js";
const { Body } = Matter;
import { height, width, wallThickness, paddleGutter } from "./constants";
import Context from "./context";
import ball, { resetBall } from "./ball";
import paddle from "./paddle";
import "./overrides";

const context = new Context();
context.init();

const b = ball();
const user = paddle(wallThickness + paddleGutter, height / 2);
const cpu = paddle(width - wallThickness - paddleGutter, height / 2);

Matter.Body.setVelocity(b, {
  x: 5,
  y: 5,
});

context.addBodies(b, user, cpu);

const collisionCheckHoc = (collisions: any) => (
  a: Matter.Body,
  b: Matter.Body
): Boolean => {
  if (collisions.length === 0) {
    return false;
  }

  return !!collisions.find(({ bodyA, bodyB }) => {
    const expectedIds = [bodyA.id, bodyB.id];
    return expectedIds.includes(a.id) && expectedIds.includes(b.id);
  });
};

Matter.Events.on(context.runner, "beforeTick", (evt) => {
  const collisions = Matter.Detector.collisions(
    [
      [b, context.walls.left],
      [b, context.walls.right],
    ],
    context.engine
  );

  const check = collisionCheckHoc(collisions);

  if (check(b, context.walls.left)) {
    resetBall(b);
  }

  if (check(b, context.walls.right) || collisions.length > 0) {
    resetBall(b);
  }

  // console.log(b.id, user.id, cpu.id);
});
