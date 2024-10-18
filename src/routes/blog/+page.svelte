<script lang="ts">
  // サーバーから渡されたデータを `data` として受け取る
  export let data: { posts: { title: string; content: string }[] };

  console.log('Data received in +page.svelte:', data);
</script>

<section>
  <div>
    <h1>✅ postList</h1>
    <ul>
      {#each data.posts as post}
        <li>
          <p><span>{post.title}</span></p>
          <p><span>{post.content}</span></p>
        </li>
      {/each}
    </ul>
  </div>
</section>
