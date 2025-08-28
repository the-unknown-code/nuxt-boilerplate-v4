import config, { app } from './app.config';
import { toSass } from './shared/sass-utils';

const modules = ['@nuxt/eslint', '@pinia/nuxt', '@vueuse/nuxt'];
if (app.storyblok) {
	modules.push('@storyblok/nuxt');
}

export default defineNuxtConfig({
	modules,
	devtools: { enabled: true },
	css: ['@/assets/main.scss'],

	runtimeConfig: {
		public: {
			breakpoints: config.breakpoints,
		},
	},
	compatibilityDate: '2025-07-15',

	vite: {
		build: {
			cssMinify: true,
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/utils/functions.scss" as *;',
					functions: {
						'get($keys)': function (keys: any) {
							keys = keys.toString().replace(/['"]+/g, '').split('.');

							let result: any = config;
							for (let i = 0; i < keys.length; i++) {
								result = result[keys[i]];
							}

							return toSass(result);
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

	nitro: {
		compressPublicAssets: {
			brotli: true,
			gzip: true,
		},
	},
});
