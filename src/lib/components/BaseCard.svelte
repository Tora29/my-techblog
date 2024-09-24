<script lang="ts">
	// コンポーネントの変数
	export let link: string = '/';
	export let classType: string = 'card';
	export let cardType: string = 'card-side';
	export let color: string = 'bg-primary';
	export let height: string = 'h-40';
	export let width: string = 'w-100';
	export let imgSrc: string = '';
	export let imgAlt: string = '';
	export let imgHeight: string = 'h-40';
	export let imgWidth: string = 'w-72';
	export let cardTitle: string = 'card-title';
	export let cardText: string = 'card-text';
</script>

<a href={link} class="{classType} {cardType} {color} {height} {width}">
	<figure>
		<img src={imgSrc} alt={imgAlt} class="{imgHeight} {imgWidth}" />
	</figure>
	<div class="card-body">
		<h2 class="card-title">{cardTitle}</h2>
		<p>{cardText}</p>
	</div>
</a>
