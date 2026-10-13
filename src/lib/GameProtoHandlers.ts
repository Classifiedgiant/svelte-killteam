import { GameStates } from "$lib/proto/messages";
import { GameState } from "$lib/GameState.svelte";

type EventName = NonNullable<GameStates.ServerMessage["payload"]>;

type ProtoHandlers = {
    [K in EventName]: (gameState: GameState, msg: GameStates.ServerMessage[K]) => void;
};

export const handlers: ProtoHandlers = {
    // starts the game
    startGame(gameState, msg) {
        console.log("Both players joined...");

        // TODO: use the msg details to load level
        gameState.stateName = "StartGame";

    },

    waitingForPlayer(gameState, msg) {
        console.log("Waiting for Player...");
    }
};
