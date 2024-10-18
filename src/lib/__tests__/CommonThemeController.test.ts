import { render, fireEvent } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import '@testing-library/jest-dom';
import CommonThemeController from '$lib/components/CommonThemeController.svelte';

describe('ThemeController Component', () => {
	test('テーマを切り替える動作を確認', async () => {
		const { getByRole, container } = render(CommonThemeController);

		// data-theme 属性を設定
		document.documentElement.setAttribute('data-theme', 'myLightTheme');

		const rootElement = document.documentElement;
		const checkbox = getByRole('checkbox');

		// テーマコントローラーがlightTheme であることを確認
		expect(rootElement.getAttribute('data-theme')).toBe('myLightTheme');
		expect(checkbox).not.toBeChecked();

		// チェックボックスをクリックしてテーマをダークに切り替え
		await fireEvent.click(checkbox);

		// ダークテーマに切り替わったか確認
		expect(rootElement.getAttribute('data-theme')).toBe('myDarkTheme');
		expect(checkbox).toBeChecked();

		// もう一度クリックしてライトテーマに戻す
		await fireEvent.click(checkbox);

		// ライトテーマに戻ったか確認
		expect(rootElement.getAttribute('data-theme')).toBe('myLightTheme');
		expect(checkbox).not.toBeChecked();

		// スナップショットを取得
		expect(container).toMatchSnapshot();
	});
});
