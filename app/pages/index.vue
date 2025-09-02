<template>
	<main class="page-index layout-block">
		<common-a-link href="/test">
			<p class="mono-large">Test Link</p>
		</common-a-link>
	</main>
</template>

<script setup lang="ts">
// import { useAsyncStoryState } from '~/libs/storyblok';

// const { story } = await useAsyncStoryState('home');
</script>

<style lang="scss" scoped>
.page-index {
	padding: var(--spacer-64) 0;
	height: 2000px;
}
</style>
