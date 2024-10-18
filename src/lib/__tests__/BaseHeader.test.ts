import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import '@testing-library/jest-dom';
import BaseHeader from '$lib/components/BaseHeader.svelte';

describe('Header Component', () => {
	test('ヘッダーをデフォルトプロパティでレンダリング', () => {
		const { getByText, container } = render(BaseHeader);

		// トップのボタンのテキストを確認
		const button = getByText('Tora29');
		expect(button).toBeInTheDocument();

		// CommonJoin に渡された joinItems の要素が正しく表示されているか確認
		const aboutMe = getByText('ABOUT ME');
		const blog = getByText('BLOG');
		const service = getByText('SERVICE');

		expect(aboutMe).toBeInTheDocument();
		expect(blog).toBeInTheDocument();
		expect(service).toBeInTheDocument();

		// テーマコントローラーが存在するか確認
		const themeController = container.querySelector('div');
		expect(themeController).toBeInTheDocument();

		// スナップショットを取得
		expect(container).toMatchSnapshot();
	});

	test('デフォルトクラスが適用されているか確認', () => {
		const { container } = render(BaseHeader);

		// デフォルトクラスが適用されているかを確認
		const header = container.querySelector('.navbar');
		expect(header).toHaveClass('bg-primary', 'relative', 'flex', 'items-center', 'h-40');

		// スナップショットを取得
		expect(container).toMatchSnapshot();
	});
});
