<script lang="ts">
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import moment from "moment";
  import Card from "./Card.svelte";
  import Loader from "../global/Loader.svelte";
  import fetchFunction from "../utils/fetchFunction";

  let today: string;
  let tomorrow: string;
  let timeStamp: string;
  let loading: Boolean = true;

  onMount(async () => {
    [today, tomorrow] = await fetchFunction(true);
    timeStamp = moment().format("DD/MM/YY, HH:mm:ss");
    loading = false;
  });

  const refetchData = async () => {
    loading = true;
    [today, tomorrow] = await fetchFunction(true);
    timeStamp = moment().format("DD/MM/YY, HH:mm:ss");
    loading = false;
  };
</script>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
  }

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
    display: block;
    color: var(--green);
  }

  button {
    align-self: flex-end;
    background: var(--red);
    color: var(--gray);
    border: none;
    font-weight: bold;
    cursor: pointer;
    width: 100px;
    height: 40px;
    border-radius: 10px;
  }

  @media screen and (max-width: 700px) {
    div > div {
      flex-direction: column;
    }
    button {
      align-self: center;
      margin-top: 20px;
    }
  }
</style>

<div class="wrapper">
  {#if loading}
    <Loader />
  {:else}
    <h2>Fire Ban:</h2>
    <div>
      <Card isToday={true} data={today} index={0} />
      <Card isToday={false} data={tomorrow} index={1} />
    </div>
    <span in:fade={{ delay: 800 }}>As at {timeStamp}</span>
    <button
      in:fly={{ delay: 1000, x: 1000, duration: 500 }}
      on:click={refetchData}>Reload</button>
  {/if}
</div>
