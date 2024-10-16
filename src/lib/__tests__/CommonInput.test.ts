import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import '@testing-library/jest-dom';
import CommonInput from '$lib/components/CommonInput.svelte';

describe('TextInput Component', () => {
	test('インプットエリアをデフォルトプロパティでレンダリング', () => {
		const { getByPlaceholderText, container } = render(CommonInput);

		// プレイスホルダーのデフォルト値を確認
		expect(getByPlaceholderText('Input Here')).toBeInTheDocument();

		// スナップショットを取得
		expect(container).toMatchSnapshot();
	});

	test('インプットエリアをカスタムプロパティでレンダリング', () => {
		const props = {
			placeholder: 'test-placeholder',
			type: 'password',
			componentType: 'label',
			style: 'input-ghost',
			color: 'input-accent',
			size: 'input-lg'
		};

		const { getByPlaceholderText, getByRole, container } = render(CommonInput, {
			props: {
				placeholder: props.placeholder,
				type: props.type as 'number' | 'text' | 'email' | 'password' | 'date' | 'tel',
				componentType: props.componentType as 'input' | 'label',
				style: props.style as 'input-bordered' | 'input-ghost',
				color: props.color as
					| 'input-primary'
					| 'input-secondary'
					| 'input-accent'
					| 'input-info'
					| 'input-success'
					| 'input-warning'
					| 'input-error',
				size: props.size as 'input-lg' | 'input-md' | 'input-sm' | 'input-xs'
			}
		});

		// カスタムプレイスホルダーの値を確認
		expect(getByPlaceholderText(props.placeholder)).toBeInTheDocument();

		// componentTypeが'input'の場合のみtextboxを取得
		if (props.componentType === 'input') {
			const input = getByRole('textbox');
			expect(input).toHaveClass(
				props.type,
				props.placeholder,
				props.componentType,
				props.style,
				props.color,
				props.size
			);
		}

		// スナップショットを取得
		expect(container).toMatchSnapshot();
	});
});
