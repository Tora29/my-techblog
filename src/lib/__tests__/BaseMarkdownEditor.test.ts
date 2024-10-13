import { render, fireEvent, waitFor } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import '@testing-library/jest-dom';
import BaseMarkdownEditor from '$lib/components/BaseMarkdownEditor.svelte';

describe('MarkdownEditor Component', () => {
	test('マークダウンエディタの初期レンダリング', () => {
		const { getByPlaceholderText, container } = render(BaseMarkdownEditor);

		// テキストエディタのデフォルト値が空であることを確認
		const textarea = getByPlaceholderText('Enter markdown here');
		expect(textarea).toHaveValue('');

		// プレビューのデフォルト値が空であることを確認
		const previewElement = container.querySelector('.preview');
		const innerHTML = previewElement ? previewElement.innerHTML : '';

		// プレビューが空であることを確認
		expect(innerHTML).toBe('');

		// スナップショットを取得
		expect(container).toMatchSnapshot();
	});

	test('マークダウン入力が正常にHTMLに変換される', async () => {
		const { getByPlaceholderText, container } = render(BaseMarkdownEditor);

		// テキストエリアの取得
		const textarea = getByPlaceholderText('Enter markdown here');

		// マークダウンの入力
		const markdownInput = '# test-h1-text\n\n**bold-text**';
		await fireEvent.input(textarea, { target: { value: markdownInput } });

		// HTML変換結果を確認
		await waitFor(() => {
			const previewElement = container.querySelector('.preview');
			const innerHTML = previewElement ? previewElement.innerHTML : '';

			// 正常にHTMLが変換されていることを確認
      expect(innerHTML).toContain('<h1>test-h1-text</h1>');
			expect(innerHTML).toContain('<strong>bold-text</strong>');
		});

		// スナップショットを取得
		expect(container).toMatchSnapshot();
	});

	test('XSS攻撃がサニタイズされることを確認', async () => {
		const { getByPlaceholderText, container } = render(BaseMarkdownEditor);

		// テキストエリアの取得
		const textarea = getByPlaceholderText('Enter markdown here');

		// 悪意のあるスクリプトを含むマークダウンを入力
		const maliciousMarkdown = '<script>alert("XSS")</script>';
		await fireEvent.input(textarea, { target: { value: maliciousMarkdown } });

		// 期待するサニタイズされたHTML
		const sanitizedHtml = '&lt;script&gt;alert("XSS")&lt;/script&gt;';

		// スクリプトがサニタイズされていることを確認
		await waitFor(() => {
			const previewElement = container.querySelector('.preview');
			const innerHTML = previewElement ? previewElement.innerHTML : '';

			expect(innerHTML).toBe(sanitizedHtml);
		});
	});

	test('大量なマークダウンデータでも正常に動作するかを確認', async () => {
		const { getByPlaceholderText, container } = render(BaseMarkdownEditor);

		// テキストエリアの取得
		const textarea = getByPlaceholderText('Enter markdown here');

		// 大量のマークダウンデータを入力
		const largeMarkdown = Array(1000).fill('# test-h1-text\n\n**bold-text**').join('\n');
		await fireEvent.input(textarea, { target: { value: largeMarkdown } });

		// プレビューエリアが正しくHTML に変換されているか確認
		await waitFor(() => {
			const previewElement = container.querySelector('.preview');
			const innerHTML = previewElement ? previewElement.innerHTML : '';

			// 正常にHTMLが変換されていることを確認
      expect(innerHTML).toContain('<h1>test-h1-text</h1>');
			expect(innerHTML).toContain('<strong>bold-text</strong>');

			// 特定の要素が1000回変換されていることを確認
			const h1Count = (previewElement?.innerHTML.match(/<h1>/g) || []).length;
			const boldCount = (previewElement?.innerHTML.match(/<strong>/g) || []).length;

			// h1タグが1000回存在することを確認
			expect(h1Count).toBe(1000);
			// strongタグが1000回存在することを確認
			expect(boldCount).toBe(1000);
		});

		// スナップショットを取得
		expect(container).toMatchSnapshot();
	});
});
