<template>
	<div
		ref="$container"
		:class="['marquee', { reverse: reverse }]"
		@mouseenter="isHovered = true"
		@mouseleave="isHovered = false"
	>
		<div v-for="i in repeat" ref="$elements" :key="i" class="inner">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
withDefaults(
	defineProps<{
		reverse?: boolean;
		repeat?: number;
		speed?: number;
		pauseOnHover?: boolean;
	}>(),
	{
		repeat: 2,
		speed: 0.02,
	}
);

const isIntersected = ref<boolean>(false);
const isHovered = ref<boolean>(false);
const $container = ref<HTMLElement | null>(null);
const $elements = ref<HTMLElement[]>([]);

// @ts-expect-error - IntersectionObserverEntry is not typed
const { stop } = useIntersectionObserver($container, ([{ isIntersecting }]) => {
	isIntersected.value = isIntersecting;
});

useFrame(() => {
	if (!isIntersected.value) return;
});

tryOnBeforeUnmount(() => {
	stop();
});
</script>

<style scoped></style>
