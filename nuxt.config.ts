import config from './app.config';
import { toSass } from './shared/sass-utils';

export default defineNuxtConfig({
	modules: ['@nuxt/eslint', '@pinia/nuxt', '@vueuse/nuxt'],
	devtools: { enabled: true },
	css: ['@/assets/main.scss'],
	compatibilityDate: '2025-07-15',

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/utils/functions.scss" as *;',
					functions: {
						'get($keys)': function (keys: any) {
							keys = keys
								.toString()
								.replace(/['"]+/g, '')
								.split('.')

							let result: any = config
							for (let i = 0; i < keys.length; i++) {
								result = result[keys[i]]
							}

							return toSass(result)
						},
						'getColors()': function () {
							return toSass(config.colors);
						},
						'getThemes()': function () {
							return toSass(config.themes);
						},
					},
				},
			},
		},
	},
	eslint: {
		checker: true,
	},
});
