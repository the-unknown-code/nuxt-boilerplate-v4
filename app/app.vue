<template>
	<div
		id="site"
		:class="[
			kebabCase(route.name as string),
			{ 'is-disabled': !enabled, 'fonts-loaded': fontsLoaded, 'is-loading': isLoading },
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
import { EVENTS } from './libs/constants/event';
import useAppStore from './store/useAppStore';

const $store = useAppStore();
const { $emit } = useNuxtApp();
const { width, height } = useWindowSize();
const { isLoading } = useLoadingIndicator();
const fontsLoaded = ref<boolean>(false);

const route = useRoute();
const scope = effectScope();

const enabled = computed(() => $store.isEnabled);

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

		if (import.meta.client) {
			setTimeout(() => {
				$store.enable();
			}, 1000);
		}
	} catch (error) {
		console.error(error);
		fontsLoaded.value = true;
	}
};

scope.run(async () => {
	const resize = useDebounceFn(() => {
		$emit(EVENTS.RESIZE, { width: width.value, height: height.value });
	}, 100);

	watch([width, height], () => {
		resize();
	});
});

tryOnBeforeUnmount(() => {
	scope.stop();
});

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
