import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { getClubSection, isClubSection } from './club.data';
import ClubHero from './components/ClubHero';
import ClubSectionNav from './components/ClubSectionNav';
import FacilitiesSection from './components/FacilitiesSection';
import FullHistorySection from './components/FullHistorySection';
import HistorySection from './components/HistorySection';
import StaffSection from './components/StaffSection';
import type { ClubSectionId } from './types';

const ClubPage = () => {
	const { slug, section } = useParams<{ slug?: string; section?: string }>();
	const activeSectionParam = section ?? slug;
	const activeSection: ClubSectionId = isClubSection(activeSectionParam) ? activeSectionParam : 'quienes-somos';
	const sectionBasePath = slug && !isClubSection(slug) ? `/club/${slug}` : '/club';
	const _section = useMemo(() => getClubSection(activeSection), [activeSection]);

	return (
		<main className="bg-primary-50 min-h-screen">
			<ClubHero title={_section.title} description={_section.description} />
			<ClubSectionNav activeSection={activeSection} basePath={sectionBasePath} />

			<section className="mx-auto w-full max-w-6xl px-6 py-10 space-y-8">
				{activeSection === 'quienes-somos' ? <HistorySection /> : null}
				{activeSection === 'historia' ? <FullHistorySection /> : null}
				{activeSection === 'staff-tecnico' ? <StaffSection /> : null}
				{activeSection === 'instalaciones' ? <FacilitiesSection /> : null}
			</section>
		</main>
	);
};

export default ClubPage;
