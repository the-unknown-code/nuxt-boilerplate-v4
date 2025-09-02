<template>
	<div
		id="site"
		:class="[
			kebabCase(route.name as string),
			{ 'fonts-loaded': fontsLoaded, 'is-loading': isLoading },
		]"
	>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script setup lang="ts">
// @ts-expect-error - Font loader is not typed
import loadFonts from '@fuzzco/font-loader';
import { kebabCase } from 'lodash';

const { isLoading } = useLoadingIndicator();
const fontsLoaded = ref<boolean>(false);
const route = useRoute();

const preloadFonts = async () => {
	try {
		const {
			public: { app },
		} = useRuntimeConfig();

		const families = app.fonts.families.map((font: any) => ({
			name: font.name,
		}));
		await loadFonts(families);
		fontsLoaded.value = true;
	} catch (error) {
		console.error(error);
		fontsLoaded.value = true;
	}
};

tryOnBeforeMount(async () => {
	await preloadFonts();
});
</script>

<style lang="scss" scoped>
#site {
	position: relative;
	width: 100vw;
	min-height: 100vh;
	overflow-x: clip;
	opacity: 0;

	&.is-loading {
		pointer-events: none;
	}

	&.fonts-loaded {
		opacity: unset;
	}
}
</style>
