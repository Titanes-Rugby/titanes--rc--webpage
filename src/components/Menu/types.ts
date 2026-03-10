export type MenuEntry = {
	label: string;
	href?: string;
	description?: string;
	children?: MenuEntry[];
};
