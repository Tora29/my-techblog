<script lang="ts">
	// コンポーネントの変数
	export let color: string = 'bg-primary';
	export let padding: string = 'p-4';
</script>

<footer class="footer footer-center {color} {padding}">
	<aside>
		<p>Copyright © {new Date().getFullYear()} - All right reserved by Tora29 Industries Ltd</p>
	</aside>
</footer>

<style>
	.footer {
		bottom: 0;
	}
</style>
