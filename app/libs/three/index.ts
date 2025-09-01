import Tempus, { type TempusCallback } from 'tempus';
import SF3Renderer from './@core/Renderer';
import SF3Viewport from './@core/Viewport';

export default class SF3Application {
	#canRender: boolean = false;
	#rafCancelFn: any;
	#renderFn: TempusCallback;

	#renderer: SF3Renderer;
	#viewport: SF3Viewport;

	constructor() {
		const { app } = useRuntimeConfig();
		this.#renderFn = this.#render.bind(this);

		this.#viewport = SF3Viewport.getInstance();
		this.#renderer = SF3Renderer.getInstance(app.three.options);
	}

	resize() {}

	#render(time: number, dt: number) {
		if (!this.#canRender) return;

		this.#viewport.render(time, dt);
		this.#renderer.render(time, dt);
	}

	start() {
		this.#rafCancelFn = Tempus.add(this.#renderFn, { priority: -1 });
	}

	stop() {
		this.#rafCancelFn?.();
	}

	toggleRender(toggle: boolean) {
		this.#canRender = toggle;
	}
}
