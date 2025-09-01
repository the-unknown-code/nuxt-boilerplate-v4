import { useAsyncStoryState } from '~/libs/storyblok';
import useAppStore from '~/store/useAppStore';

export default defineNuxtPlugin(async () => {
	const {
		public: { app },
	} = useRuntimeConfig();

	if (app.storyblok.enabled) {
		console.log('>>', app);
		const { story: settings } = await useAsyncStoryState('global');
		console.log('>>', settings);
		useAppStore().saveSettings(settings);
	}
});
