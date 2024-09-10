<script lang="ts">
  import BaseCard from "$lib/components/BaseCard.svelte";
  import { constCards } from "$lib/data/ConstCards";
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center pt-32">
  {#each constCards as card}
    <BaseCard 
      {...card}
    />
  {/each}
</div>
