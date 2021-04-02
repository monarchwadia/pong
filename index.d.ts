type Vector = {
  x: number;
  y: number;
};

type Player = {
  score: number;
  paddle: {
    pos: Vector;
    size: Vector;
  };
};

type Game = {
  human: Player;
  cpu: Player;
  ball: {
    position: Vector;
    velocity: Vector;
    radius: Vector;
  };
};
