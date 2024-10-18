<script lang="ts">
	// コンポーネントの変数
	export let link: string = '/';
	export let cardSide: 'card-side' | '' = 'card-side';
	export let color: 'bg-primary' | 'bg-secondary' = 'bg-primary';
	export let customStyle: string = ''
	export let imgSrc: string = '';
	export let imgAlt: string = '';
	export let cardTitle: string = 'card-title';
	export let cardText: string = 'card-text';
</script>

<a href={link} class="card {cardSide} {color}">
	<figure>
		<img src={imgSrc} alt={imgAlt} class="{customStyle}" />
	</figure>
	<div class="card-body">
		<h2 class="card-title">{cardTitle}</h2>
		<p>{cardText}</p>
	</div>
</a>
