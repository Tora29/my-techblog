<script lang="ts">
	// コンポーネントの変数
	export let type: string = 'join';
	export let joinItems: { link: string; class: string; text: string }[];

	// コンポーネントのインポート
	import CommonButton from './CommonButton.svelte';
</script>

<div class={type}>
	{#each joinItems as item}
		<CommonButton link={item.link} style={item.class} text={item.text} />
	{/each}
</div>
