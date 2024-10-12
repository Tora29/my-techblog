import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import '@testing-library/jest-dom';
import BaseFooter from '$lib/components/BaseFooter.svelte';

describe('Footer Component', () => {
	test('フッターをデフォルトプロパティでレンダリング', () => {
		const { getByText, container } = render(BaseFooter);

		// コピーライトテキストが期待通りであることを確認
		const copyrightText = getByText(
			/Copyright © \d{4} - All right reserved by Tora29 Industries Ltd/i
		);
		expect(copyrightText).toBeInTheDocument();

		// デフォルトクラスが適用されているかを確認
		const footerElement = container.querySelector('footer');
		expect(footerElement).toHaveClass('footer-center', 'bg-primary', 'p-4');

		// スナップショットを取得
		expect(container).toMatchSnapshot();
	});

	test('フッターをカスタムプロパティでレンダリング', () => {
		const { container } = render(BaseFooter, {
			props: {
				color: 'bg-secondary',
				padding: 'p-8'
			}
		});

		// カスタムクラスが適用されているかを確認
		const footerElement = container.querySelector('footer');
		expect(footerElement).toHaveClass('bg-secondary', 'p-8');

		// スナップショットを取得
		expect(container).toMatchSnapshot();
	});
});
