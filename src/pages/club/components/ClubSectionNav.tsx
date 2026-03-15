import { Link } from 'react-router-dom';

import { clubSections } from '../club.data';
import type { ClubSectionId } from '../types';

type ClubSectionNavProps = {
	activeSection: ClubSectionId;
	basePath: string;
};

const ClubSectionNav = ({ activeSection, basePath }: ClubSectionNavProps) => {
	return (
		<div className="sticky top-0 z-20 border-b border-primary-100 bg-white/95 backdrop-blur-sm">
			<div className="mx-auto flex w-full max-w-6xl gap-2 overflow-x-auto px-6 py-3">
				{clubSections.map((section) => (
					<Link
						key={section.id}
						to={`${basePath}/${section.id}`}
						className={`rounded-lg px-4 py-2 text-xs font-semibold tracking-[0.12em] uppercase ${
							activeSection === section.id ? 'bg-primary-700 text-white' : 'text-primary-700'
						}`}
					>
						{section.label}
					</Link>
				))}
			</div>
		</div>
	);
};

export default ClubSectionNav;
