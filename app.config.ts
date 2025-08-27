/*
░██████╗████████╗██╗░░░██╗██████╗░██╗░█████╗░  ███████╗██████╗░███████╗██╗░██████╗░██╗░░██╗████████╗
██╔════╝╚══██╔══╝██║░░░██║██╔══██╗██║██╔══██╗  ██╔════╝██╔══██╗██╔════╝██║██╔════╝░██║░░██║╚══██╔══╝
╚█████╗░░░░██║░░░██║░░░██║██║░░██║██║██║░░██║  █████╗░░██████╔╝█████╗░░██║██║░░██╗░███████║░░░██║░░░
░╚═══██╗░░░██║░░░██║░░░██║██║░░██║██║██║░░██║  ██╔══╝░░██╔══██╗██╔══╝░░██║██║░░╚██╗██╔══██║░░░██║░░░
██████╔╝░░░██║░░░╚██████╔╝██████╔╝██║╚█████╔╝  ██║░░░░░██║░░██║███████╗██║╚██████╔╝██║░░██║░░░██║░░░
╚═════╝░░░░╚═╝░░░░╚═════╝░╚═════╝░╚═╝░╚════╝░  ╚═╝░░░░░╚═╝░░╚═╝╚══════╝╚═╝░╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░
*/

import { generateShades } from './shared/sass-utils/utils';

// Define base colors and generate their shades
const colors: any = generateShades({
	'black': '#111111',
	'off-white': '#f5f5f5',
	'blue': '#0000ff',
});

// Define light and dark themes using generated colors
const themes: any = {
	light: {
		bg: colors['off-white'],
		fg: colors['black'],
		contrast: colors['blue'],
	},
	dark: {
		bg: colors['black'],
		fg: colors['off-white'],
		contrast: colors['blue'],
	},
};

// Define responsive design breakpoints for layouts
const breakpoints: any = {
	mobile: 800,
	wide: 1720
};

// Define grid system with columns, gap, and margin settings
const grid: any = {
	columns: [4, 16],
	gap: [8, 8],
	margin: [16, 48]
}

// Application-level configuration (SSR, prefetching, etc.)
export const app = {
	ssr: false,
	link: {
		prefetch: true,
	},
};

// Export the configuration object for use throughout SCSS
export default {
	colors,
	themes,
	breakpoints,
	grid
};
