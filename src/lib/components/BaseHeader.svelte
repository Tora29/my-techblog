<script lang="ts">
	// コンポーネントの変数
	export let color: string = 'bg-primary';

	// CommonStyle
	const commonStyle: string = 'join-item w-40';

	// CommonJoin に値を格納する
	export let joinItems = [
		{ class: commonStyle, text: 'ABOUT ME', link: '/about' },
		{ class: commonStyle, text: 'BLOG', link: '/blog' },
		{ class: commonStyle, text: 'SERVICE', link: '/service' }
	];

	// コンポーネントのインポート
	import CommonJoin from './CommonJoin.svelte';
	import CommonButton from './CommonButton.svelte';
	import BaseThemeController from '$lib/components/BaseThemeController.svelte';
</script>

<!-- Header -->
<div class={`navbar ${color} relative flex items-center h-40`}>
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
