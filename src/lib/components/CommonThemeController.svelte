<script lang="ts">
	// LifeCycle Hooks
	import { onMount } from 'svelte';

	// Svelte MDI
	import WeatherSunnyIcon from '../icons/WeatherSunnyIcon.svelte';
	import WeatherNightIcon from '../icons/WeatherNightIcon.svelte';

	// コンポーネントの変数
	export let lightTheme: string = 'myLightTheme';
	export let darkTheme: string = 'myDarkTheme';
	export let labelClass: string = 'flex cursor-pointer gap-2';
	export let inputClass: string = 'toggle theme-controller';
	export let attributeName: string = 'data-theme';

	let isDarkTheme = false;

	// ユーザーのシステム設定に基づいて初期テーマを適用
	onMount(() => {
		isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
		document.documentElement.setAttribute(attributeName, isDarkTheme ? darkTheme : lightTheme);
	});

	// テーマの切替関数
	function toggleTheme() {
		isDarkTheme = !isDarkTheme;
		document.documentElement.setAttribute(attributeName, isDarkTheme ? darkTheme : lightTheme);
	}
</script>

<label class={labelClass}>
	<WeatherSunnyIcon />
	<input type="checkbox" class={inputClass} on:change={toggleTheme} bind:checked={isDarkTheme} />
	<WeatherNightIcon />
</label>
