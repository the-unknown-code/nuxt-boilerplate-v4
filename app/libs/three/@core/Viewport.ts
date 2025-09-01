export default class SF3Viewport {
	static instance: SF3Viewport;

	#width: Ref<number>;
	#height: Ref<number>;

	static getInstance() {
		if (!SF3Viewport.instance) {
			SF3Viewport.instance = new SF3Viewport();
		}
		return SF3Viewport.instance;
	}

	constructor() {
		const { width, height } = useWindowSize();
		this.#width = width;
		this.#height = height;
	}

	render(time: number, dt: number) {
		console.log(time, dt);
	}

	get width() {
		return this.#width.value;
	}

	get height() {
		return this.#height.value;
	}
}
