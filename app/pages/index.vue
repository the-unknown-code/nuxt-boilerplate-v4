<template>
	<main class="page-index layout-block">
		<h1>Studio Freight</h1>
		<common-a-link href="/test">
			<p class="mono-large">Go To Test Page</p>
		</common-a-link>
	</main>
</template>

<script setup lang="ts">
import { useAsyncStoryState } from '~/libs/storyblok';

const { story } = await useAsyncStoryState('home');
console.log(story);
</script>

<style lang="scss" scoped>
.page-index {
	padding: var(--spacer-64) 0;
}
</style>
