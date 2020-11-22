<script lang="ts">
  import { onMount } from "svelte";

  import fetchFunction from "../utils/fetchFunction";

  let binType, date;

  onMount(async () => {
    ({ binType, date } = await fetchFunction(false));
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
  <h2>Bin Type:</h2>
  <p>{binType}</p>
</div>
