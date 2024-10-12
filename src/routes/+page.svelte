<script lang="ts">
	import BaseCard from '$lib/components/CommonCard.svelte';
	import { constCardItems } from '$lib/data/ConstCardItems';

	export let cardItems = constCardItems;
</script>

<div class="grid grid-cols-12 gap-4 pb-20">
	{#each cardItems as cardItem}
		<div class="col-span-12 md:col-start-3 md:col-span-8 pt-20">
			<BaseCard
				link={cardItem.link}
				imgSrc={cardItem.imgSrc}
				imgAlt={cardItem.imgAlt}
				cardTitle={cardItem.cardTitle}
				cardText={cardItem.cardText}
				height={cardItem.height}
				imgHeight={cardItem.imgHeight}
			/>
		</div>
	{/each}
</div>
