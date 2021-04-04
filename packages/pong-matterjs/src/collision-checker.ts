import Matter from "matter-js";

type BroadArray = Array<Array<Matter.Body>>;

class CollisionChecker {
  collisions: any;
  constructor(engine: Matter.Engine, broadArray: BroadArray) {
    this.collisions = Matter.Detector.collisions(broadArray, engine);
  }
}
