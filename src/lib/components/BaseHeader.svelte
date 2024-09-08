<script lang="ts">

</script>

<!-- ヘッダー全体 -->
<div class="navbar bg-base-300 fixed h-40 w-full px-6 flex justify-between items-start">
  
  <!-- 左上（HOME） -->
  <div class="text-3xl font-bold">
    <a href="/">HOME</a>
  </div>

  <!-- 右上（ナビゲーション）-->
  <div class="flex flex-col items-end">
    <ul class="text-lg font-bold flex">
      <li class="ml-4"><a href="/about">ABOUT</a></li>
      <li class="ml-4"><a href="/work">WORK</a></li>
      <li class="ml-4"><a href="/blog">BLOG</a></li>
    </ul>

    <!-- 右下（MY TECHBLOG）-->
    <div class="outline-text pt-10">
      <span class="text-6xl font-bold opacity-30">MY TECHBLOG</span>
    </div>
  </div>
</div>

<style>
  /* ヘッダーの縁取り */
  .navbar {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 40% 100%, 36.5% 70%, 18.5% 70%, 15% 100%, 0% 100%);
  }

  .outline-text {
    color: transparent;
    -webkit-text-stroke: 1px white;
  }
</style>
