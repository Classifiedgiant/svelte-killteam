import type { Group } from "three";

export class GameState {
    level?: Level;
    army1?: Army;
    army2?: Army;
    stateName: string = $state("");
}

export class Army {
    Operatives: Operator[] = [];
}

export class Operator {
    name: string | null = null;
    movement: number | null = null;
    actionPointLimit: number | null = null;
    groupActivation: number | null = null;
    defense: number | null = null;
    save: number | null = null;
    wounds: number | null = null;
    keywords: number[] = [];
    model?: string;
}

// Level
export class Level {
    SpawnArea1: Zone | null = null;
    SpawnArea2: Zone | null = null;
    model?: Group;
}

export class Zone {
    topLeft: Point;
    bottomRight: Point;

    constructor(tl: Point, br: Point)
    {
        this.topLeft = tl;
        this.bottomRight = br;
    }
}

export class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
