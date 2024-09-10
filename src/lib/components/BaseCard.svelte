<script lang="ts">
  export let imgSrc: string;      // 画像のsrc
  export let imgAlt: string;      // 画像のalt
  export let title: string;       // カードのタイトル
  export let description: string; // カードの説明文
</script>

<div class="card bg-base-100 image-full w-96 transform transition-transform duration-300 hover:scale-105">
  <figure>
    <img src={imgSrc} alt={imgAlt} />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{description}</p>
  </div>
</div>

<style>
  .card-body h2,.card-body p {
  color: white; 
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8); 
}

  /* カードのスタイル */
  .card {
    border: 2px solid rgba(255, 255, 255, 0.2);
    transition: border-color 0.3s ease, transform 0.3s ease;
  }

  /* カードがホバーされたときのエフェクト */
  .card:hover {
    border-color: rgba(255, 255, 255, 0.5);
  }
</style>
