import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8', // V8 カバレッジプロバイダーを指定
      reporter: ['text', 'json', 'html'], // 出力形式
      reportsDirectory: './coverage', // カバレッジレポートの出力ディレクトリ
    },
  },
});
