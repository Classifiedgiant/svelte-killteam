export class GameState {
    level?: Level;
    army1?: Army;
    army2?: Army;
    stateName: string = $state("");
}

class Army {
    Operatives: Operator[] = [];
}

class Operator {
    name: string | null = null;
    movement: number | null = null;
    actionPointLimit: number | null = null;
    groupActivation: number | null = null;
    defense: number | null = null;
    save: number | null = null;
    wounds: number | null = null;
    keywords: number[] = [];
}

// Level
class Level {
    SpawnArea: Point | null = null;
}

class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
