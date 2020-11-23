<script lang="ts">
  import { onMount } from "svelte";

  import Loader from "../global/Loader.svelte";
  import fetchFunction from "../utils/fetchFunction";

  let binType, date: string;
  let loading: boolean = true;

  onMount(async () => {
    ({ binType, date } = await fetchFunction(false));
    loading = false;
  });
</script>

<style>
  h2 {
    text-transform: uppercase;
    color: var(--green);
  }
  p {
    text-transform: capitalize;
    color: var(--blue);
  }
</style>

<div>
  {#if loading}
    <Loader />
  {:else}
    <h2>Bin Type:</h2>
    <p>{binType}</p>
  {/if}
</div>
