<template>
	<div id="site" :class="{ 'fonts-loaded': fontsLoaded }">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script setup lang="ts">
// @ts-expect-error - Font loader is not typed
import loadFonts from '@fuzzco/font-loader';
const fontsLoaded = ref<boolean>(false);

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
	}
};

tryOnBeforeMount(async () => {
	await preloadFonts();
});
</script>

<style lang="scss" scoped>
#site {
	opacity: 0;

	&.fonts-loaded {
		opacity: unset;
	}
}
</style>
