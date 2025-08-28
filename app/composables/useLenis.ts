export default (callback = () => {}) => {
	const instanceKey = `lenis`;
	const lenis = inject<any>(instanceKey);

	if (lenis?.value) {
		lenis.value.on('scroll', callback);
	}

	tryOnBeforeUnmount(() => lenis.value?.off('scroll', callback));
	return lenis;
};
