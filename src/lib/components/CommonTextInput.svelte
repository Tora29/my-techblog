<script lang="ts">
	// コンポーネントの変数
	export let placeholder: string = 'Input here';
	export let style: string = 'input-bordered';
	export let color: string = 'input-primary';
	export let size: string = 'input-md';
</script>

<input type="text" {placeholder} class="input {style} {color} {size}" />
