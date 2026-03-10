export const overlayVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

export const panelVariants = {
	hidden: { x: '100%', opacity: 0.9 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { type: 'spring', stiffness: 260, damping: 28 },
	},
	exit: { x: '100%', opacity: 0.9, transition: { duration: 0.2 } },
};

export const dropdownVariants = {
	hidden: { opacity: 0, y: 8, scale: 0.98 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.18, ease: 'easeOut' },
	},
	exit: { opacity: 0, y: 6, scale: 0.98, transition: { duration: 0.14 } },
};

export const mobileGroupVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
};

export const mobileItemVariants = {
	hidden: { opacity: 0, y: 8 },
	visible: { opacity: 1, y: 0 },
};
