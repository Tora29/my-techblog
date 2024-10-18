<script lang="ts">
	import 'tailwindcss/tailwind.css'
	import 'github-markdown-css/github-markdown.css';
	
	import BaseHeader from '$lib/components/BaseHeader.svelte';
	import BaseFooter from '$lib/components/BaseFooter.svelte';
</script>

<BaseHeader />
<slot />
<BaseFooter />
