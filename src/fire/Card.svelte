<script lang="ts">
  import { fly } from "svelte/transition";

  export let data: string;
  export let isToday: Boolean = true;
  export let index: number;
</script>

<style>
  div {
    border: 2px solid var(--blue);
    border-radius: 20px;
    padding: 20px;
  }
  h3 {
    color: var(--green);
  }
  p {
    color: var(--blue);
  }
</style>

<div in:fly={{ y: 200, duration: 500, delay: index * 100 }}>
  <h3>{isToday ? 'Today' : 'Tomorrow'}</h3>
  <p>{data}</p>
</div>
