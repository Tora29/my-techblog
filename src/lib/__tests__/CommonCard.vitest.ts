import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import '@testing-library/jest-dom';
import BaseCard from '$lib/components/CommonCard.svelte';

describe('Card Component', () => {
	test('カードをデフォルトプロパティでレンダリング', () => {
		const { getByRole, getByText, container } = render(BaseCard);

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
			color: 'bg-secondary',
			height: 'h-50',
			width: 'w-200',
			imgSrc: 'https://test.com/image.jpg',
			imgAlt: 'Test Image',
			imgHeight: 'h-50',
			imgWidth: 'w-150',
			cardTitle: 'Test Title',
			cardText: 'Test text content.'
		};

		const { getByRole, getByAltText, getByText, container } = render(BaseCard, { props });

		// カスタムリンクを確認
		const link = getByRole('link');
		expect(link).toHaveAttribute('href', props.link);
		expect(link).toHaveClass(props.color, props.height, props.width);

		// カスタム画像を確認
		const img = getByAltText(props.imgAlt);
		expect(img).toHaveAttribute('src', props.imgSrc);
		expect(img).toHaveClass(props.imgHeight, props.imgWidth);

		// カスタムタイトルとテキストを確認
		expect(getByText(props.cardTitle)).toBeInTheDocument();
		expect(getByText(props.cardText)).toBeInTheDocument();

		// スナップショットを取得
		expect(container).toMatchSnapshot();
	});

	test('imgSrcが空の場合、画像がレンダリングされない', () => {
		const props = {
			imgSrc: '',
			imgAlt: ''
		};

		const { queryByRole, container } = render(BaseCard, { props });

		// 画像がレンダリングされていないことを確認
		const img = queryByRole('img');
		expect(img).not.toBeInTheDocument();

		// スナップショットを取得
		expect(container).toMatchSnapshot();
	});
});
