<template>
	<transition
		mode="out-in"
		@enter="onEnter"
		@after-enter="onAfterEnter"
		@before-leave="onBeforeLeave"
		@leave="onLeave"
	>
		<slot />
	</transition>
	<!-- CUSTOM PAGE TRANSITION -->
	<client-only>
		<teleport to="body">
			<div id="page-transition" ref="$transition" />
		</teleport>
	</client-only>
</template>

<script setup lang="ts">
import gsap from 'gsap/all';
import { GSAPDuration, GSAPEase } from '~/libs/constants/gsap';
import useAppStore from '~/store/useAppStore';

const $transition = ref<HTMLElement | null>(null);
const lenis = useLenis();
const $store = useAppStore();
const isTransitioning = ref(false);
const t: gsap.core.Timeline = gsap.timeline({ paused: true });

// ---- CUSTOM HOOKS ----

const initialize = () => {
	t.to($transition.value, {
		opacity: 1,
		duration: GSAPDuration.FAST,
		ease: GSAPEase.SLOW_IN_OUT,
	});
};

tryOnMounted(async () => {
	await nextTick();
	initialize();
});

// ---- TRANSITION HOOKS ----
const onEnter = async (e: Element, done: () => void) => {
	done();
	isTransitioning.value = false;

	await nextTick();
	t.reverse();
};

const onAfterEnter = async () => {
	$store.enable();

	if (lenis.value) {
		await nextTick();
		lenis.value.scrollTo(0, { immediate: true, force: true });
	}
};

const onBeforeLeave = () => {
	$store.disable();
};

const onLeave = (e: Element, done: () => void) => {
	isTransitioning.value = true;
	t.eventCallback('onComplete', done);
	t.play();
};
</script>

<style lang="scss" scoped>
#page-transition {
	@include fill(fixed);
	background-color: var(--green);
	opacity: 0;
	z-index: 999;
	pointer-events: none;
}
</style>
