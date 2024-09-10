<script lang="ts">
  import { onMount } from 'svelte';

  let pathIds = ['path1', 'path2', 'path3', 'path4', 'path5', 'path6', 'path7', 'path8', 'path9', 'path10', 'path11'];

  function getRandomPaths(num: number) {
    const shuffled = [...pathIds].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  function showRandomPaths() {
    pathIds.forEach((id) => {
      const path = document.getElementById(id);
      if (path) {
        path.style.opacity = '0';
        path.style.animation = '';
      }
    });

    const randomPaths = getRandomPaths(Math.floor(Math.random() * (10 - 3 + 1)) + 3);
    randomPaths.forEach((id) => {
      const path = document.getElementById(id);
      if (path) {
        path.style.opacity = '1';
        path.style.animation = 'glow 10s ease-in-out infinite';
      }
    });
  }

  onMount(() => {
    showRandomPaths();
    setInterval(() => {
      showRandomPaths();
    }, 5000);
  });
</script>

<div class="absolute inset-0 z-0">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="w-full h-full animated-path">
    <path id="path1" class="glow-path" fill="none" stroke="white" stroke-width="4" d="M0,160 L160,160 L240,320" />
    <path id="path2" class="glow-path" fill="none" stroke="white" stroke-width="4" d="M80,280 L280,280 L360,440 L600,440" />
    <path id="path3" class="glow-path" fill="none" stroke="white" stroke-width="4" d="M320,80 L400,80 L480,-60 L560,-60" />
    <path id="path4" class="glow-path" fill="none" stroke="white" stroke-width="4" d="M620,50 L820,50 L880,-90 L800,-90" />
    <path id="path5" class="glow-path" fill="none" stroke="white" stroke-width="4" d="M500,180 L680,180 L760,340 L1200,340" />
    <path id="path6" class="glow-path" fill="none" stroke="white" stroke-width="4" d="M600,280 L880,280 L900,240 L1000,240 L1050,400 L1400,400" />
    <path id="path7" class="glow-path" fill="none" stroke="white" stroke-width="4" d="M970,240 L1050,0 L1200 0" />
    <path id="path8" class="glow-path" fill="none" stroke="white" stroke-width="4" d="M1000,480 L1050,480" />
    <path id="path9" class="glow-path" fill="none" stroke="white" stroke-width="4" d="M450,250 L550,250" />
    <path id="path10" class="glow-path" fill="none" stroke="white" stroke-width="4" d="M1200,100 L1500,100" />
    <path id="path11" class="glow-path" fill="none" stroke="white" stroke-width="4" d="M200,-30 L600,-30" />
  </svg>
</div>

<style>
.animated-path path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: glow 5s ease-in-out infinite; /* アニメーションの速度を5秒に設定 */
}

@keyframes glow {
  0% {
      stroke-dashoffset: 1000;
      filter: drop-shadow(0 0 5px white);  /* 弱めの発光でスタート */
      opacity: 0.3;
  }
  50% {
      stroke-dashoffset: 500;
      filter: drop-shadow(0 0 30px #00ff11);  /* より強い発光に変更 */
      opacity: 1;  /* 完全に表示 */
  }
  100% {
      stroke-dashoffset: 0;
      filter: drop-shadow(0 0 10px white);  /* 発光を元に戻す */
      opacity: 0;  /* 最後はフェードアウト */
  }
}
</style>
