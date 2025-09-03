<template>
	<lenis :ref="({lenis}: any) => lenisInstance = lenis" :options="{}">
		<div :class="[$store.currentTheme, { enabled: $store.isEnabled }]">
			<site-header />

			<transition
				mode="out-in"
				@enter="onEnter"
				@after-enter="onAfterEnter"
				@before-leave="onBeforeLeave"
				@leave="onLeave"
			>
				<slot />
			</transition>

			<site-footer />

			<client-only>
				<dev-only>
					<debug-orchestra />
				</dev-only>
			</client-only>
		</div>
	</lenis>
</template>

<script setup lang="ts">
import type Lenis from 'lenis';
import useAppStore from '~/store/useAppStore';

const $store = useAppStore();
const lenisInstance = ref<Lenis | null>(null);

const onEnter = async () => {};
const onAfterEnter = async () => {
	$store.enable();

	if (lenisInstance.value) {
		await nextTick();
		lenisInstance.value.scrollTo(0, { immediate: true, force: true });
	}
};

const onBeforeLeave = () => {
	$store.disable();
};

const onLeave = (e: any, done: any) => {
	done();
};
</script>

<style scoped></style>
