export const topMenuIconVariants = {
	rest: { opacity: 0, width: 0, x: -6 },
	hover: { opacity: 1, width: 16, x: 0 },
};

export const topMenuItemVariants = {
	rest: { y: 0 },
	hover: { y: -2 },
};

export const dropdownIconVariants = {
	rest: { opacity: 0, x: -4, scale: 0.9 },
	hover: { opacity: 1, x: 0, scale: 1 },
};

export const dropdownItemVariants = {
	rest: { x: 0 },
	hover: { x: 3 },
};

export const dropdownVariants = {
	hidden: { opacity: 0, y: 8, scale: 0.98 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.18, ease: 'easeOut' as const },
	},
	exit: { opacity: 0, y: 6, scale: 0.98, transition: { duration: 0.14 } },
};

export const overlayVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

export const panelVariants = {
	hidden: { x: '100%', opacity: 0.9 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { type: 'spring' as const, stiffness: 260, damping: 28 },
	},
	exit: { x: '100%', opacity: 0.9, transition: { duration: 0.2 } },
};

export const mobileGroupVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
};

export const mobileItemVariants = {
	hidden: { opacity: 0, y: 8 },
	visible: { opacity: 1, y: 0 },
};
