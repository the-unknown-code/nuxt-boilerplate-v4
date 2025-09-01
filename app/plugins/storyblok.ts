import { useAsyncStoryState } from '~/libs/storyblok';
import useAppStore from '~/store/useAppStore';

export default defineNuxtPlugin(async () => {
	const {
		public: { app },
	} = useRuntimeConfig();

	if (app.storyblok.enabled) {
		const { story: settings } = await useAsyncStoryState('global');
		useAppStore().saveSettings(settings);
	}
});
