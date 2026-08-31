import { GameStates } from "$lib/proto/messages";
import { GameState } from "$lib/GameState.svelte";

type EventName = NonNullable<GameStates.ServerMessage["payload"]>;

type ProtoHandlers = {
    [K in EventName]: (gameState: GameState, msg: GameStates.ServerMessage[K]) => void;
};

export const handlers: ProtoHandlers = {
    // starts the game
    startGame(gameState, msg) {

    },

    waitingForPlayer(gameState, msg) {
        console.log("Waiting for Player...");
    }
};
