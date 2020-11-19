<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Card from "./Card.svelte";
  import Loader from "../global/Loader.svelte";
  import fetchFire from "../utils/fetchFire";

  let today: string;
  let tomorrow: string;
  let timeStamp: string;
  let loading: Boolean = true;

  onMount(async () => {
    [today, tomorrow, timeStamp] = await fetchFire();
    loading = false;
  });
</script>

<style>
  div > div {
    display: flex;
    justify-content: space-around;
    gap: 50px;
  }

  h2 {
    color: var(--blue);
    text-transform: uppercase;
    flex: 1 0 100%;
  }

  span {
    margin-top: 20px;
    display: inline-block;
    color: var(--green);
  }

  @media screen and (max-width: 700px) {
    div {
      flex-direction: column;
    }
  }
</style>

<div>
  {#if loading}
    <Loader />
  {:else}
    <h2>Fire Ban:</h2>
    <div>
      <Card isToday={true} data={today} index={0} />
      <Card isToday={false} data={tomorrow} index={1} />
    </div>
    <span transition:fade={{ delay: 800 }}>As at {timeStamp}</span>
  {/if}
</div>
