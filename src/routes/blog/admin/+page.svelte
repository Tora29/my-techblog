<script lang="ts">
	import BaseTextInput from '$lib/components/BaseTextInput.svelte';
	import BaseMarkdownEditor from '$lib/components/BaseMarkdownEditor.svelte';
	import CommonButton from '$lib/components/CommonButton.svelte';
</script>

<div class="p-4">
	<BaseTextInput placeholder="記事タイトル" />
</div>

<BaseMarkdownEditor />

<div class="p-4">
	<CommonButton text="Submit" />
</div>
