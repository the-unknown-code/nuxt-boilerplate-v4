import type SF3AbstractScene from './scenes/AbstractScene';

export default class SF3ViewManager {
	static instance: SF3ViewManager;
	#scenes: SF3AbstractScene[] = [];

	static getInstance() {
		if (!SF3ViewManager.instance) {
			SF3ViewManager.instance = new SF3ViewManager();
		}
		return SF3ViewManager.instance;
	}

	constructor() {
		this.loadScenes();
	}

	loadScenes() {
		console.log(this.#scenes);
	}
}
