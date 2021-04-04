export enum Direction {
  Up = "Up",
  Down = "Down",
}

export default class Controls {
  key?: Direction;

  listen() {
    document.addEventListener("keydown", (evt: KeyboardEvent) => {
      let direction = this.getDirection(evt.code);

      if (direction === undefined) {
        return;
      }

      this.key = direction;
    });

    document.addEventListener("keyup", (evt: KeyboardEvent) => {
      let direction = this.getDirection(evt.code);
      if (this.key === direction) {
        this.key = undefined;
      }
    });
  }

  private getDirection(code: string) {
    const DirectionMap: { [number: string]: Direction } = {
      ArrowUp: Direction.Up,
      ArrowDown: Direction.Down,
    };

    return DirectionMap[code] || undefined;
  }
}
