<script lang="ts">
  import { Canvas } from '@threlte/core'
  import Scene from '$lib/Scene.svelte'
  import { GameStates } from '$lib/proto/messages'
  import { GameState } from "$lib/GameState.svelte"
  import { handlers } from '$lib/GameProtoHandlers';
  import { PUBLIC_API_URL } from '$env/static/public'

  let gameId = $state("<null>")
  let wsToken = $state("<null>")
  let gameState = new GameState();

  function handleServerMessage(data: ArrayBuffer) {
    console.log("raw type:", data.constructor.name, "byteLength:", (data as ArrayBuffer)?.byteLength);
    console.log("raw bytes:", Array.from(new Uint8Array(data)));
    const envelope = GameStates.ServerMessage.decode(new Uint8Array(data));

    const kind = envelope.payload;
    if (!kind) {
      console.warn("Unknown server messages: ", envelope);
      return;
    }
    handlers[kind](gameState, envelope[kind]);
  }
</script>


{#if gameState.stateName != "StartGame"}
<button type="button" onclick={async () => {
    // TODO: make random userId for testing purposes
    // This need to be replaced with allocated userId's
    const userId = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    const url = PUBLIC_API_URL;

    const resp = await fetch(url + "/game", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ userId: userId })
    });


    const respJson = await resp.json();
    console.log(respJson)

    gameId = respJson["gameId"];
    wsToken = respJson["wsToken"];

    const wsUrl = url.replace(/^http/, "ws");
    const wsConnectionUrl = wsUrl + "/game/" + gameId + "?wsToken=" + wsToken + "&playerId=" + userId;
    const socket = new WebSocket(wsConnectionUrl);
    socket.binaryType = "arraybuffer";

    socket.addEventListener("open", () => {
      console.log("WebSocket connected");
    });

    socket.addEventListener("message", (event) => {
      handleServerMessage(event.data);
    });

    socket.addEventListener("close", () => {
      console.log("WebSocket closed");
    });

    socket.addEventListener("error", (err) => {
      console.error("WebSocket error:", err);
    });

}}>ConnectToGame</button>
{:else}
<Canvas>
  <Scene />
</Canvas>
{/if}
