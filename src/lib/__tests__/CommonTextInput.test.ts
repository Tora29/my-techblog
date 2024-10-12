import { getByRole, render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import '@testing-library/jest-dom';
import CommonTextInput from '$lib/components/CommonTextInput.svelte';

describe('TextInput Component', () => {
	test('インプットエリアをデフォルトプロパティでレンダリング', () => {
		const { getByPlaceholderText, container } = render(CommonTextInput);

		// プレイスホルダーのデフォルト値を確認
		expect(getByPlaceholderText('Input here')).toBeInTheDocument();

		// スナップショットを取得
		expect(container).toMatchSnapshot();
	});

	test('インプットエリアをカスタムプロパティでレンダリング', () => {
		const props = {
			placeholder: 'test-placeholder',
			style: 'test-style',
			color: 'test-color',
			size: 'test-size'
		};

		const { getByPlaceholderText, getByRole, container } = render(CommonTextInput, { props });

		// カスタムプレイスホルダーの値を確認
		expect(getByPlaceholderText(props.placeholder)).toBeInTheDocument();

		// カスタムクラスを確認
		const input = getByRole('textbox');
		expect(input).toHaveClass('input', props.style, props.color, props.size);

		// スナップショットを取得
		expect(container).toMatchSnapshot();
	});
});
