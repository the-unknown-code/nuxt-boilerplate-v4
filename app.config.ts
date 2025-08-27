import { generateShades } from './shared/sass-utils/utils';

const colors: any = generateShades({
	'black': '#111111',
	'off-white': '#f5f5f5',
	'blue': '#0000ff',
});

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

const breakpoints: any = {
	mobile: 800,
	wide: 1720
};

const grid: any = {
	columns: [4, 16],
	gap: [8, 8],
	margin: [16, 48]
}

export const app = {
	ssr: false,
	link: {
		prefetch: true,
	},
};

export default {
	colors,
	themes,
	breakpoints,
	grid
};
