import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import '@testing-library/jest-dom';
import CommonJoin from '$lib/components/CommonJoin.svelte';

describe('Join Component', () => {
	test('ジョインをデフォルトプロパティでレンダリング', () => {
		// テスト用デフォルトデータの準備
		const joinItems = [
			{
				link: '/about',
				class: 'btn-primary',
				text: 'ABOUT ME'
			},
			{
				link: '/blog',
				class: 'btn-primary',
				text: 'BLOG'
			},
			{
				link: '/service',
				class: 'btn-primary',
				text: 'SERVICE'
			}
		];

		// コンポーネントをレンダリングし、joinItems をprops として渡す
		const { getByText, container } = render(CommonJoin, {
			props: { joinItems }
		});

		// ボタンがレンダリングされるか確認
		const aboutButton = getByText('ABOUT ME');
		const blogButton = getByText('BLOG');
		const serviceButton = getByText('SERVICE');

		// ボタンの存在確認
		expect(aboutButton).toBeInTheDocument();
		expect(blogButton).toBeInTheDocument();
		expect(serviceButton).toBeInTheDocument();

		// ボタンのクラス確認
		expect(aboutButton).toHaveClass('btn-primary');
		expect(blogButton).toHaveClass('btn-primary');
		expect(serviceButton).toHaveClass('btn-primary');

		// ボタンのリンク確認
		expect(aboutButton.closest('a')).toHaveAttribute('href', '/about');
		expect(blogButton.closest('a')).toHaveAttribute('href', '/blog');
		expect(serviceButton.closest('a')).toHaveAttribute('href', '/service');

		// スナップショットを取得
		expect(container).toMatchSnapshot();
	});
});
