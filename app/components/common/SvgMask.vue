<template>
	<div v-if="svg && source" class="svg-mask" :style="style" />
</template>

<script setup lang="ts">
const props = defineProps({
	svg: {
		type: String,
		default: '',
	},
	storyblok: {
		type: Boolean,
		default: true,
	},
});

const source = computed(() => {
	if (props.storyblok) {
		return props.svg.replace('https://a', 'https://a2');
	}
	return props.svg;
});

const style = computed(() => ({
	maskImage: `url(${source.value})`,
}));
</script>

<style lang="scss" scoped>
.svg-mask {
	mask-size: contain;
	mask-repeat: no-repeat;
	mask-position: center;
}
</style>
