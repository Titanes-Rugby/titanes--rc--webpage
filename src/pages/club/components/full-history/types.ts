import type { ComponentType, SVGProps } from 'react';

import type { LegacyTeam } from '../../types';

export type TimelineEvent = {
	year: string;
	title: string;
	subtitle: string;
	body: string;
	highlight?: string;
	icon: ComponentType<SVGProps<SVGSVGElement>>;
	image: string;
	gradient: string;
};

export type LegacyListItem = LegacyTeam;
