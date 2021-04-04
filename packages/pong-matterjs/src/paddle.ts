import Matter from "matter-js";

// build walls
const paddle = (x: number, y: number) =>
  Matter.Bodies.rectangle(x, y, 20, 150, {
    isStatic: true,
    render: {
      fillStyle: "#ffffff",
    },
    restitution: 1,
    friction: 0,
    frictionStatic: 0,
    frictionAir: 0,
    inertia: Infinity,
  });

export default paddle;
