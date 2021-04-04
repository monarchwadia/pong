import Matter from "matter-js";

const ball = (x: number, y: number, radius: number) =>
  Matter.Bodies.circle(x, y, radius, {
    restitution: 1,
    friction: 0,
    frictionAir: 0,
    frictionStatic: 0,
    density: 1,
    inertia: Infinity,
  });

export default ball;
