<script lang="ts">
	import xss from 'xss';
	import { marked } from 'marked';

	let markdown: string = '';
	let htmlContent: string = '';

	// markdown が変更されるたびにHTML に変換しサニタイズ
	$: {
		const parsedMarkdown = marked.parse(markdown);
		htmlContent = xss(parsedMarkdown as string); 
	}
</script>

<!-- レイアウトコンテナ -->
<div class="grid grid-cols-2 gap-4 p-4 min-h-[70vh] max-h-[100vh]">
	<!-- Markdown を入力するためのテキストエリア -->
	<div class="flex flex-col">
		<textarea
			bind:value={markdown}
			placeholder="Enter markdown here"
			class="flex-1 rounded resize-none p-4 focus:outline-none"
		></textarea>
	</div>

	<!-- サニタイズされたHTML を表示 -->
	<div class="preview markdown-body rounded overflow-auto p-4">
		{@html htmlContent}
	</div>
</div>

<style>
	textarea {
		background-color: #f2f2f2;
	}
</style>
