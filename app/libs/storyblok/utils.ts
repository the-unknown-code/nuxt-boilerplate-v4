export const useUnwrapBlok = (blokIn: any) => {
	return Array.isArray(blokIn) ? blokIn[0] : blokIn;
};
