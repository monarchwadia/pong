import Matter, { Bodies } from "matter-js";
import Context from "./context";
import ball from "./ball";

const context = new Context();
context.init();

const b = ball(500, 500, 10);

Matter.Body.setVelocity(b, {
  x: 15,
  y: 15,
});

context.addBodies(b);
