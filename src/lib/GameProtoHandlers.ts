import { GameStates } from "$lib/proto/messages";
import { GameState, Level, Zone, Point} from "$lib/GameState.svelte";

// GLTF loader
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
const loader = new GLTFLoader();

type EventName = NonNullable<GameStates.ServerMessage["payload"]>;

type ProtoHandlers = {
    [K in EventName]: (gameState: GameState, msg: GameStates.ServerMessage[K]) => void;
};

async function loadLevel(levelName: string)
{
    const gltf = await loader.loadAsync("/models/level/"+levelName);

    // Todo: Pass real information
    const spawn1 = new Zone(new Point(0,0), new Point(0,0));
    const spawn2 = new Zone(new Point(0,0), new Point(0,0));

    gltf.scene.traverse((obj: any) => {
        console.log(obj.name, obj.type, obj.userData);
    })

    const level = new Level();
    level.SpawnArea1 = spawn1;
    level.SpawnArea2 = spawn2;
    level.model = gltf
    return  level;
}

export const handlers: ProtoHandlers = {
    // starts the game
    async startGame(gameState, msg) {
        console.log("Both players joined...");

        // TODO: use the msg details to load level
        
        gameState.level = await loadLevel(msg!.level!.resource!);
        gameState.stateName = "StartGame";

    },

    waitingForPlayer(gameState, msg) {
        console.log("Waiting for Player...");
    }
};
