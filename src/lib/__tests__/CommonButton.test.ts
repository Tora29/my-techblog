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

		// デフォルトのクラスを確認
		expect(link).toHaveClass('btn', 'btn-accent', 'btn-active', 'no-animation', 'btn-md');

		// スナップショットを取得
		expect(container).toMatchSnapshot();
	});

	test('ボタンをカスタムプロパティでレンダリング', () => {
		const props = {
			link: 'test-link',
			text: 'test-text',
			color: 'btn-primary',
			style: 'btn-outline',
			state: 'btn-disabled',
			effect: 'glass',
			size: 'btn-lg',
			width: 'btn-wide',
			radius: 'btn-circle',
			join: 'join-item'
		} as const;

		const { getByRole, getByText, container } = render(CommonButton, { props });

		// カスタムリンクを確認
		const link = getByRole('link');
		expect(link).toHaveAttribute('href', props.link);

		// カスタムテキストを確認
		expect(getByText(props.text)).toBeInTheDocument();

		// カスタムスタイルを確認
		expect(link).toHaveClass(
			'btn',
			props.color,
			props.style,
			props.state,
			props.effect,
			props.size,
			props.width,
			props.radius,
			props.join
		);

		// スナップショットを取得
		expect(container).toMatchSnapshot();
	});
});
