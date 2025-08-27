import { defineStore } from 'pinia';

export default defineStore('app.store', {
	state: () => ({
		theme: 'light',
	}),
	getters: {
		theme: (state: any) => state.theme,
	},
	actions: {
		setTheme(theme: string) {
			this.theme = theme;
		},
	},
});