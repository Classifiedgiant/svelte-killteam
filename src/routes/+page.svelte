<script lang="ts">
  import { Canvas } from '@threlte/core'
  import type { PageProps } from './$types';
  import Scene from '$lib/Scene.svelte'
  import { GameStates } from '$lib/proto/messages'
  import { PUBLIC_API_URL } from '$env/static/public'

  // let { data }: PageProps = $props();
  let gameId = $state("<null>")
  let wsToken = $state("<null>")

  function handleServerMessage(data: ArrayBuffer) {
    console.log("raw type:", data.constructor.name, "byteLength:", (data as ArrayBuffer)?.byteLength);
    console.log("raw bytes:", Array.from(new Uint8Array(data)));
    const envelope = GameStates.ServerMessage.decode(new Uint8Array(data));

    switch (envelope.payload) {
      case "startGame":
        console.log("StartGame:", envelope.startGame);
        break;
      case "waitingForPlayer":
        console.log("WaitingForPlayer:", envelope.waitingForPlayer);
        break;
      default:
        console.warn("Unknown ServerMessage payload:", envelope);
    }
  }
</script>

<button type="button" onclick={async () => {
    const userId = 1228;
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

<h1>{gameId}</h1>
<h1>{wsToken}</h1>

<!-- {#if true}
<button type="button" onclick={() => connectToGame = !connectToGame}>
  Connect To Game
</button>
{:else}
<Canvas>
  <Scene />
</Canvas>
{/if} -->
