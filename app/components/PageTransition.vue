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
</template>

<script setup lang="ts">
import useAppStore from '~/store/useAppStore';

const lenis = useLenis();
const $store = useAppStore();

const onEnter = async () => {};
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

const onLeave = (e: any, done: any) => {
	done();
};
</script>

<style lang="scss" scoped></style>
