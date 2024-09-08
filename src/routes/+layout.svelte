<script lang=ts>
  import BaseHeader from "$lib/components/BaseHeader.svelte";
  import BaseFooter from "$lib/components/BaseFooter.svelte";
  import BaseBackground from "$lib/components/BaseBackground.svelte";
</script>

<BaseBackground />
<BaseHeader />
<div class="pt-40">
  <slot />
</div>
<BaseFooter />
