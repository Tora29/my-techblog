<script lang="ts">
	import CommonInput from '$lib/components/CommonInput.svelte';
	import BaseMarkdownEditor from '$lib/components/BaseMarkdownEditor.svelte';
	import CommonButton from '$lib/components/CommonButton.svelte';
</script>

<div class="p-4">
	<CommonInput placeholder="記事タイトル" />
</div>

<BaseMarkdownEditor />

<div class="p-4">
	<CommonButton text="Submit" />
</div>
