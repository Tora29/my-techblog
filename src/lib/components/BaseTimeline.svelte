<script lang="ts">
	// TimelineItems
	import { constTimelineItems } from '$lib/data/ConstTimelineItems';

	// Svelte MDI
	import CheckCircleIcon from '../icons/CheckCircleIcon.svelte';
</script>

<ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
	{#each constTimelineItems as item, index}
		<li>
			{#if index !== 0}
				<hr />
			{/if}

			<div class="timeline-middle">
				<CheckCircleIcon />
			</div>

			{#if index % 2 === 0}
				<div class="timeline-start mb-10 md:text-end">
					<time class="font-mono italic">{item.year}</time>
					<div class="text-lg font-black">{item.title}</div>
					{item.description}
				</div>
			{:else}
				<div class="timeline-end mb-10">
					<time class="font-mono italic">{item.year}</time>
					<div class="text-lg font-black">{item.title}</div>
					{item.description}
				</div>
			{/if}

			<hr />
		</li>
	{/each}
</ul>
