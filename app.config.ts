/*
░██████╗████████╗██╗░░░██╗██████╗░██╗░█████╗░  ███████╗██████╗░███████╗██╗░██████╗░██╗░░██╗████████╗
██╔════╝╚══██╔══╝██║░░░██║██╔══██╗██║██╔══██╗  ██╔════╝██╔══██╗██╔════╝██║██╔════╝░██║░░██║╚══██╔══╝
╚█████╗░░░░██║░░░██║░░░██║██║░░██║██║██║░░██║  █████╗░░██████╔╝█████╗░░██║██║░░██╗░███████║░░░██║░░░
░╚═══██╗░░░██║░░░██║░░░██║██║░░██║██║██║░░██║  ██╔══╝░░██╔══██╗██╔══╝░░██║██║░░╚██╗██╔══██║░░░██║░░░
██████╔╝░░░██║░░░╚██████╔╝██████╔╝██║╚█████╔╝  ██║░░░░░██║░░██║███████╗██║╚██████╔╝██║░░██║░░░██║░░░
╚═════╝░░░░╚═╝░░░░╚═════╝░╚═════╝░╚═╝░╚════╝░  ╚═╝░░░░░╚═╝░░╚═╝╚══════╝╚═╝░╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░

Nuxt 4 Boilerplate
@author: Studio Freight
*/

import { generateShades } from './shared/sass-utils/utils';

interface AppConfig {
	title: string;
	ssr: boolean;
	storyblok: {
		enabled: boolean;
		settings?: string;
		forceDraft?: boolean;
		apiOptions: {
			region?: string;
		};
	};
	three: {
		enabled: boolean;
		options: {
			alpha: boolean;
			antialias: boolean;
			stencil: boolean;
			depth: boolean;
			powerPreference: string;
			preserveDrawingBuffer: boolean;
		};
	};
	fonts: {
		assets?: {
			prefix: string;
		};
		defaults: {
			weights: number[];
		};
		families: {
			name: string;
			provider: string;
		}[];
	};
	link: {
		prefetch: string;
	};
}

// Define base colors and generate their shades
const colors: any = generateShades({
	black: '#080808',
	grey: '#909090',
	white: '#fffef4',
	green: '#00ff6a',
});

// Define light and dark themes using generated colors
const themes: any = {
	light: {
		bg: colors['white'],
		fg: colors['black'],
		contrast: colors['green'],
	},
	dark: {
		bg: colors['black'],
		fg: colors['white'],
		contrast: colors['green'],
	},
};

// Define responsive design breakpoints for layouts
const breakpoints: any = {
	mobile: 800,
	wide: 1720,
};

// Define grid system with columns, gap, and margin settings
const grid: any = {
	columns: [4, 16],
	gap: [8, 8],
	margin: [16, 48],
};

// Define global spacers
const spacers: any = [4, 8, 16, 32, 64];

// Application-level configuration (SSR, prefetching, etc.)
export const app: AppConfig = {
	title: 'SF Boilerplate',
	ssr: false,
	storyblok: {
		enabled: true,
		forceDraft: false,
		settings: 'global', // true if global settings must be loaded before the app is mounted
		apiOptions: {
			region: 'us',
		},
	},
	three: {
		enabled: false,
		options: {
			alpha: false,
			antialias: false,
			stencil: false,
			depth: false,
			powerPreference: 'high-performance',
			preserveDrawingBuffer: false,
		},
	},
	fonts: {
		defaults: {
			weights: [300, 400, 500, 700, 900],
		},
		families: [
			{
				name: 'Regesto Grotesk',
				provider: 'local',
			},
			{
				name: 'Geist Mono',
				provider: 'google',
			},
		],
	},
	link: {
		prefetch: 'visibility', // nuxt default
	},
};

// Export the configuration object for use throughout SCSS
export default {
	colors,
	themes,
	breakpoints,
	spacers,
	grid,
};
