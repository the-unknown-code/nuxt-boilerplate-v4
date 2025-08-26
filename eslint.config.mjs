// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
	rules: {
		'vue/html-indent': 'off',
		'vue/multi-word-component-names': 'off',
		'vue/max-attributes-per-line': 'off',
		'@stylistic/comma-dangle': 'off',
	},
});
