/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			{
				myLightTheme: {
					primary: '#DBD0C0', // ライトベージュ
					secondary: '#DCBA92', // ゴールドベージュ
					accent: '#1D1D1D', // ダークグレー
					neutral: '#1D1D1D',
					'base-100': '#FFFFFF' // ベースカラーホワイト
				},
				myDarkTheme: {
					primary: '#141424', // ネイビー系
					secondary: '#B5B5B6', // 明るいグレー
					accent: '#323240', // 暗いグレー系
					neutral: '#141424', // 同じネイビー系を使用
					'base-100': '#000000' // ベースカラーはブラック
				}
			}
		]
	},
	theme: {
		extend: {
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px'
			}
		}
	},
	plugins: [require('daisyui')]
};
