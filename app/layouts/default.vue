<template>
	<lenis :options="{}" ref="$wrapper">
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
import useAppStore from '~/store/useAppStore';
const $store = useAppStore();
const $wrapper = ref<HTMLElement | null>(null);

const onEnter = async () => {};

const onAfterEnter = async () => {
	$store.enable();
	const lenisInstance = ($wrapper.value as any)?.lenis;
	if (lenisInstance) {
		await nextTick();
		lenisInstance.scrollTo(0, { immediate: true });
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
