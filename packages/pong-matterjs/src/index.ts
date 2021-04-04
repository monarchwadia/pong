import Matter from "matter-js";
import Context from "./context";

const context = new Context();
context.init();

const boxA = Matter.Bodies.rectangle(400, 200, 80, 80);
const boxB = Matter.Bodies.rectangle(450, 50, 80, 80);

context.addBodies(boxA, boxB);
