<script lang="ts">

</script>

<!-- SVGを使った背景 -->
<div class="absolute inset-0 z-0">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="w-full h-full animated-path">
    <path class="glow-path" fill="none" stroke="white" stroke-width="4" d="M0,160 L160,160 L240,320" />
    <path class="glow-path" fill="none" stroke="white" stroke-width="4" d="M80,280 L280,280 L360,440 L600,440" />
    <path class="glow-path" fill="none" stroke="white" stroke-width="4" d="M320,80 L400,80 L480,-60 L560,-60" />
    <path class="glow-path" fill="none" stroke="white" stroke-width="4" d="M620,50 L820,50 L880,-90 L800,-90" />
    <path class="glow-path" fill="none" stroke="white" stroke-width="4" d="M500,180 L680,180 L760,340 L1200,340" />
    <path class="glow-path" fill="none" stroke="white" stroke-width="4" d="M600,280 L880,280 L900,240 L1000, 240 L1050,400 L1400, 400" />
    <path class="glow-path" fill="none" stroke="white" stroke-width="4" d="M970,240 L1050,0 L1200 0" />
    <path class="glow-path" fill="none" stroke="white" stroke-width="4" d="M1000,480 L1050,480" />
    <path class="glow-path" fill="none" stroke="white" stroke-width="4" d="M450,250 L550,250" />
    <path class="glow-path" fill="none" stroke="white" stroke-width="4" d="M1200,100 L1500,100" />
  </svg>
</div>

<style>
  /* 背景に使うSVGの発光エフェクト */
  svg {
    filter: drop-shadow(0 0 10px white);
  }

  /* 発光アニメーション */
  .animated-path path {
    stroke-dasharray: 1000;  /* 線の長さに合わせて調整 */
    stroke-dashoffset: 1000;  /* アニメーションの開始位置を調整 */
    animation: glow 2.5s ease-in-out forwards, fade 4s ease-in-out infinite alternate;  /* アニメーションの設定 */
  }

  /* 左から右に光るアニメーション */
  @keyframes glow {
    0% {
      stroke-dashoffset: 1000;
      filter: drop-shadow(0 0 10px white);
    }
    50% {
      stroke-dashoffset: 500;
      filter: drop-shadow(0 0 10px #00ff11);
    }
    100% {
      stroke-dashoffset: 0;
      filter: drop-shadow(0 0 5px white);
    }
  }

  /* 継続的に線を光らせるアニメーション */
  @keyframes fade {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 0.3;
    }
  }
</style>
