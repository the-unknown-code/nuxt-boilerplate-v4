<template>
	<lenis :options="{ duration: 1.2 }">
		<slot />

		<client-only>
			<debug-orchestra />
		</client-only>
		
	</lenis>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
