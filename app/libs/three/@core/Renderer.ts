import { WebGLRenderer, type WebGLRendererParameters } from 'three';
import SF3Viewport from './Viewport';

export default class SF3Renderer {
	static instance: SF3Renderer;

	#r: WebGLRenderer;
	#viewport: SF3Viewport;

	static getInstance(options: Partial<WebGLRendererParameters> = {}) {
		if (!SF3Renderer.instance) {
			SF3Renderer.instance = new SF3Renderer(options);
		}
		return SF3Renderer.instance;
	}

	constructor(options: Partial<WebGLRendererParameters>) {
		this.#viewport = SF3Viewport.getInstance();
		this.#r = new WebGLRenderer(options);
	}

	resize() {
		const { width, height } = this.#viewport;
		this.#r.setSize(width, height);
	}

	render(time: number, dt: number) {
		// this.#r.render(time, dt);
		console.log(time, dt);
	}
}
