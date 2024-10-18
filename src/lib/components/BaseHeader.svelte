<script lang="ts">
	import CommonButton from './CommonButton.svelte';
	import CommonThemeController from '$lib/components/CommonThemeController.svelte';
</script>

<!-- Header -->
<div class={'navbar bg-primary relative flex items-center h-40'}>
	<!-- トップ -->
	<div class="absolute top-0 left-0 m-4 md:m-6">
		<CommonButton text="Tora29" />
	</div>
	<div class="flex-1 flex justify-center">
		<div class="join">
			<CommonButton join="join-item" link="/about" text="ABOUT ME" />
			<CommonButton join="join-item" link="/blog" text="BLOG"/>
			<CommonButton join="join-item" link="/service" text="SERVICE"/>
		</div>
	</div>
	<div>
		<CommonThemeController />
	</div>
</div>

<style>
</style>
