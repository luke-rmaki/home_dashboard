<script lang="ts">
  import Fire from "./fire/Fire.svelte";
  import Bin from "./bin/Bin.svelte";
</script>

<style>
  main {
    padding: 1em;
    margin: 0 auto;
    text-align: center;
  }

  h1 {
    color: var(--red);
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  :global(body) {
    min-height: 100vh;
    background: var(--grey);
  }
</style>

<svelte:head>
  <title>Home Dashboard</title>
</svelte:head>
<main>
  <h1>Home Dashboard</h1>
  <Fire />
  <Bin />
</main>
