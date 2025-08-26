// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/eslint', '@pinia/nuxt', '@vueuse/nuxt'],
	devtools: { enabled: true },
	compatibilityDate: '2025-07-15',

	eslint: {
		checker: true,
		config: {
			stylistic: {
				indent: 2,
				semi: true,
			},
		},
	},
});
