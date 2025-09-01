import { defineStore } from 'pinia';

export default defineStore('app.store', {
	state: () => ({
		theme: 'theme-light',
		enabled: true,
	}),
	getters: {
		isEnabled: (state: any) => state.enabled,
		currentTheme: (state: any) => state.theme,
	},
	actions: {
		enable() {
			this.enabled = true;
		},
		disable() {
			this.enabled = false;
		},
		setTheme(theme: string) {
			this.theme = theme;
		},
		switchTheme() {
			this.theme = this.theme === 'theme-light' ? 'theme-dark' : 'theme-light';
		},
	},
});
