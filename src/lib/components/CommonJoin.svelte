<script lang="ts">
	// コンポーネントの変数
	export let joinItems: { link: string; class: string; text: string }[];

	// コンポーネントのインポート
	import CommonButton from './CommonButton.svelte';
</script>

<div class="join">
	{#each joinItems as item}
		<CommonButton link={item.link} classType={item.class} text={item.text} />
	{/each}
</div>
