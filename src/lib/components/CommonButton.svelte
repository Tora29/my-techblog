<script lang="ts">
	// コンポーネントの変数
	export let link: string = '/';
	export let classType: string = 'btn';
	export let text: string = 'Button';
	export let style: string = '';
	export let commonStyle: string = '';
</script>

<a href={link} class={`${classType} ${style} ${commonStyle}`}>{text}</a>
