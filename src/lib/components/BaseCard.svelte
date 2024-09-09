<script lang="ts">
  export let imgSrc: string;      // 画像のsrc
  export let imgAlt: string;      // 画像のalt
  export let title: string;       // カードのタイトル
  export let description: string; // カードの説明文
  export let buttonText: string;  // ボタンのテキスト
</script>

<div class="card bg-base-100 image-full w-96 shadow-xl">
  <figure>
    <img src={imgSrc} alt={imgAlt} />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{description}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">{buttonText}</button>
    </div>
  </div>
</div>
