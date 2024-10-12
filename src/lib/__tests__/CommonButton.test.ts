import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import '@testing-library/jest-dom';
import CommonButton from '$lib/components/CommonButton.svelte';

describe('Button Component', () => {
	test('ボタンをデフォルトプロパティでレンダリング', () => {
		const { getByRole, getByText, container } = render(CommonButton);

		// リンクのデフォルト値を確認
		const link = getByRole('link');
		expect(link).toHaveAttribute('href', '/');

		// デフォルトのテキストを確認
		expect(getByText('Button')).toBeInTheDocument();

		// スナップショットを取得
		expect(container).toMatchSnapshot();
	});

	test('ボタンをカスタムプロパティでレンダリング', () => {
		const props = {
			link: 'test-link',
			text: 'test-text',
			classType: 'test-classType'
		};

		const { getByRole, getByText, container } = render(CommonButton, { props });

		// カスタムリンクを確認
		const link = getByRole('link');
		expect(link).toHaveAttribute('href', props.link);

		// カスタムテキストを確認
		expect(getByText(props.text)).toBeInTheDocument();

		// カスタムスタイルを確認
		expect(link).toHaveClass('btn', props.classType);

		// スナップショットを取得
		expect(container).toMatchSnapshot();
	});
});
