<template>
	<div id="orchestra" :class="{ active }">
		<div class="columns layout-grid">
			<div v-for="i in columns" :key="i" />
		</div>
	</div>
</template>

<script setup lang="ts">
const { isMobile } = useBreakpoints();
const active = ref<boolean>(false);
const columns: Ref<number> = computed((): number => {
	void isMobile.value;

	return parseInt(
		getComputedStyle(document.documentElement).getPropertyValue(
			'--layout-columns-count'
		)
	);
});

const handleKeyDown = (event: KeyboardEvent) => {
	if (event.key === 'g') {
		active.value = !active.value;
	}
};

tryOnMounted(() => {
	window.addEventListener('keydown', handleKeyDown);
	return () => window.removeEventListener('keydown', handleKeyDown);
});

tryOnBeforeUnmount(() => {
	window.removeEventListener('keydown', handleKeyDown);
});
</script>

<style lang="scss" scoped>
#orchestra {
	@include fill(fixed);
	z-index: 99999;
	pointer-events: none;
	display: none;

	&.active {
		display: block;
	}

	.columns {
		position: absolute;
		inset: 0;

		div {
			background: red;
			opacity: 0.3;
			height: 100vh;
		}
	}
}
</style>
