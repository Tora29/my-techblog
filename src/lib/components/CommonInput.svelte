<script lang="ts">
	// コンポーネントの変数
	export let placeholder: string = 'Input Here';
	export let type: 'text' | 'email' | 'number' | 'password' | 'date' | 'tel' = 'text';
	export let componentType: 'input' | 'label' = 'input';
	export let style: 'input-bordered' | 'input-ghost' = 'input-bordered';
	export let color:
		| 'input-primary'
		| 'input-secondary'
		| 'input-accent'
		| 'input-info'
		| 'input-success'
		| 'input-warning'
		| 'input-error' = 'input-primary';
	export let size: 'input-lg' | 'input-md' | 'input-sm' | 'input-xs' = 'input-md';
</script>

<input {type} {placeholder} class="{componentType} {style} {color} {size}" />
