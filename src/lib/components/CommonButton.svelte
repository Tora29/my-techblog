<script lang="ts">
	// コンポーネントの変数
	export let link: string = '/';
	export let text: string = 'Button';
	export let classType: string = '';
</script>

<a href={link} class={`btn ${classType} `}>{text}</a>
