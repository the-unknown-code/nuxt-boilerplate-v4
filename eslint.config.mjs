// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
	rules: {
		'vue/html-indent': 'off',
		'vue/multi-word-component-names': 'off',
		'vue/max-attributes-per-line': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@stylistic/comma-dangle': 'off',
		'@stylistic/semi': 'off',
		'@stylistic/eol-last': 'off',
		'@typescript-eslint/ban-ts-comment': [
			'warn',
			{ 'ts-expect-error': 'allow-with-description' },
		],
	},
});
