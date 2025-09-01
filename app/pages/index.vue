<template>
	<div class="layout-block">{{ story }}</div>
</template>

<script setup lang="ts">
import { useAsyncStoryState } from '~/libs/storyblok';

const { story } = await useAsyncStoryState('home');
</script>

<style scoped></style>
