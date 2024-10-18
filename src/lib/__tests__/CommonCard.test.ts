import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import '@testing-library/jest-dom';
import CommonCard from '$lib/components/CommonCard.svelte';

describe('Card Component', () => {
	test('カードをデフォルトプロパティでレンダリング', () => {
		const { getByRole, getByText, container } = render(CommonCard);

		// リンクのデフォルト値を確認
		const link = getByRole('link');
		expect(link).toHaveAttribute('href', '/');

		// デフォルトのタイトルとテキストを確認
		expect(getByText('card-title')).toBeInTheDocument();
		expect(getByText('card-text')).toBeInTheDocument();

		// スナップショットを取得
		expect(container).toMatchSnapshot();
	});

	test('カードをカスタムプロパティでレンダリング', () => {
		const props = {
			link: '/test-link',
			cardSide: '',
			color: 'bg-secondary',
			customStyle: 'h-40 w-100',
			imgSrc: 'https://test.com/image.jpg',
			imgAlt: 'Test Image',
			cardTitle: 'Test Title',
			cardText: 'Test text content.'
		} as const;

		const { getByRole, getByAltText, getByText, container } = render(CommonCard, { props });

		// カスタムリンクを確認
		const link = getByRole('link');
		expect(link).toHaveAttribute('href', props.link);
		expect(link).toHaveClass(props.color);

		// カスタム画像を確認
		const img = getByAltText(props.imgAlt);
		expect(img).toHaveAttribute('src', props.imgSrc);
		expect(img).toHaveClass(props.customStyle);

		// カスタムタイトルとテキストを確認
		expect(getByText(props.cardTitle)).toBeInTheDocument();
		expect(getByText(props.cardText)).toBeInTheDocument();

		// スナップショットを取得
		expect(container).toMatchSnapshot();
	});
});
