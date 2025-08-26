<!--
  LenisWrapper.vue
  ----------------
  This component sets up a Lenis smooth scrolling instance
  with wrapper and content refs, provides it globally via
  Vue's provide/inject system, and ensures cleanup on unmount.
-->

<template>
	<div ref="$wrapper" class="lenis">
		<div ref="$content">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
import Lenis from 'lenis';

const { options } = defineProps({
	options: {
		type: Object,
		default: () => {},
	},
});

const $wrapper = ref<HTMLElement | null>(null);
const $content = ref<HTMLElement | null>(null);
const lenis = shallowRef<Lenis | null>(null);
provide('lenis', lenis);

const initLenis = () => {
	lenis.value = new Lenis({
		wrapper: $wrapper.value as HTMLElement,
		content: $content.value as HTMLElement,
		eventsTarget: $wrapper.value as HTMLElement,
		...options,
	});

	lenis.value.scrollTo(0, { immediate: true });
};

tryOnMounted(() => {
	if (!lenis.value) {
		initLenis();
	}
});

tryOnBeforeUnmount(() => {
	lenis.value?.destroy();
});
</script>
