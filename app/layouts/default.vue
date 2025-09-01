<template>
	<lenis :options="{ duration: 1.2 }">
		<div :class="[$store.currentTheme, { enabled: $store.isEnabled }]">
			<slot />

			<client-only>
				<debug-orchestra />
			</client-only>
		</div>
	</lenis>
</template>

<script setup lang="ts">
import useAppStore from '~/store/useAppStore';

const $store = useAppStore();
console.log($store.theme);
</script>

<style scoped></style>
