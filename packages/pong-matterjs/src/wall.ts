import Matter from "matter-js";

// build walls
const wall = (x: number, y: number, width: number, height: number) =>
  Matter.Bodies.rectangle(x, y, width, height, {
    isStatic: true,
    render: {
      fillStyle: "#868e96",
    },
    restitution: 1,
    friction: 0,
    frictionStatic: 0,
    frictionAir: 0,
    inertia: Infinity,
  });

export default wall;
