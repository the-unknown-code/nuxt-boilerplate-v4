<template>
	<div class="layout-block">{ index }</div>
</template>

<script setup lang="ts">
import { useAsyncStoryState } from '~/composables/storyblok';

const { story } = await useAsyncStoryState('home');
</script>

<style scoped></style>
