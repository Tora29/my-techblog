<script lang="ts">
	// コンポーネントの変数
	export let link: string = '/';
	export let text: string = 'Button';
	export let color:
		| 'btn-primary'
		| 'btn-secondary'
		| 'btn-accent'
		| 'btn-info'
		| 'btn-success'
		| 'btn-warning'
		| 'btn-error' = 'btn-accent';
	export let style: 'btn-link' | 'btn-ghost' | 'btn-outline' | '' = '';
	export let state: 'btn-active' | 'btn-disabled' = 'btn-active';
	export let effect: 'glass' | 'no-animation' = 'no-animation';
	export let size: 'btn-lg' | 'btn-md' | 'btn-sm' | 'btn-xs' = 'btn-md';
	export let width: 'btn-wide' | 'btn-block' | '' = '';
	export let radius: 'btn-circle' | 'btn-square' | '' = '';
	export let join: 'join-item' | '' = '';
</script>

<a href={link} class="btn {color} {style} {state} {effect} {size} {width} {radius} {join}"
	>{text}
</a>
