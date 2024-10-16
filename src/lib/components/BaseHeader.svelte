<script lang="ts">
	// CommonJoin に値を格納
	export let joinItems = [
		{ class: 'join-item w-40', text: 'ABOUT ME', link: '/about' },
		{ class: 'join-item w-40', text: 'BLOG', link: '/blog' },
		{ class: 'join-item w-40', text: 'SERVICE', link: '/service' }
	];

	// コンポーネントのインポート
	import CommonJoin from './CommonJoin.svelte';
	import CommonButton from './CommonButton.svelte';
	import BaseThemeController from '$lib/components/CommonThemeController.svelte';
</script>

<!-- Header -->
<div class={'navbar bg-primary relative flex items-center h-40'}>
	<!-- トップ -->
	<div class="absolute top-0 left-0 m-4 md:m-6">
		<CommonButton text="Tora29" />
	</div>
	<div class="flex-1 flex justify-center">
		<CommonJoin {joinItems} />
	</div>
	<div>
		<BaseThemeController />
	</div>
</div>

<style>
</style>
