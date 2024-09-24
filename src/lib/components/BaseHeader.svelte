<script lang="ts">
	// コンポーネントの変数
	export let navbar: string = 'navbar';
	export let color: string = 'bg-primary';

  // CommonStyle
	const commonStyle: string = 'join-item w-40';

	// CommonJoin に値を格納する
	export let joinItems = [
		{ class: commonStyle, text: 'ABOUT ME', link: '/about' },
		{ class: commonStyle, text: 'SERVICE', link: '/service' },
		{ class: commonStyle, text: 'BLOG', link: '/blog' },
		{ class: commonStyle, text: 'CONTACT', link: '/contact' }
	];

	// コンポーネントのインポート
	import CommonJoin from './CommonJoin.svelte';
	import CommonButton from './CommonButton.svelte';
</script>

<!-- Header -->
<div class={`${navbar} ${color} relative flex items-center h-40`}>
	<!-- トップ -->
<div class="absolute top-0 left-0 m-4 md:m-6">
    <CommonButton text="Tora29" {commonStyle} />
</div>
	<div class="flex-1 flex justify-center">
		<CommonJoin {joinItems} />
	</div>
</div>

<style>
</style>
