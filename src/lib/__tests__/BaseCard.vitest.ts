import { render } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import BaseCard from '$lib/components/BaseCard.svelte';

describe('Card Component', () => {
	it('renders with default props', () => {
		const { getByRole, getByText } = render(BaseCard);

		// リンクのデフォルト値を確認
		const link = getByRole('link');
		expect(link).toHaveAttribute('href', '/');

		// デフォルトのタイトルとテキストを確認
		expect(getByText('card-title')).toBeInTheDocument();
		expect(getByText('card-text')).toBeInTheDocument();
	});

	it('renders with custom props', () => {
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

		const { getByRole, getByAltText, getByText } = render(BaseCard, { props });

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
	});

	it('renders without image when imgSrc is empty', () => {
		const props = {
			imgSrc: '',
			imgAlt: ''
		};

		const { queryByRole } = render(BaseCard, { props });

		// 画像がレンダリングされていないことを確認
		const img = queryByRole('img');
		expect(img).not.toBeInTheDocument();
	});
});
