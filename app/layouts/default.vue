<template>
	<lenis :options="{}">
		<div :class="[$store.currentTheme, { enabled: $store.isEnabled }]">
			<slot />

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
</script>

<style scoped></style>
