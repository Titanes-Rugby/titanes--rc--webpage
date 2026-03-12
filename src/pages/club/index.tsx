import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { getClubSection, isClubSection } from './club.data';
import ClubHero from './components/ClubHero';
import ClubSectionNav from './components/ClubSectionNav';
import FacilitiesSection from './components/FacilitiesSection';
import HistorySection from './components/HistorySection';
import StaffSection from './components/StaffSection';
import type { ClubSectionId } from './types';

const ClubPage = () => {
	const { slug, section } = useParams<{ slug?: string; section?: string }>();
	const activeSectionParam = section ?? slug;
	const activeSection: ClubSectionId = isClubSection(activeSectionParam) ? activeSectionParam : 'historia';
	const sectionBasePath = slug && !isClubSection(slug) ? `/club/${slug}` : '/club';
	const _section = useMemo(() => getClubSection(activeSection), [activeSection]);

	return (
		<main className="bg-titanes-50 min-h-screen">
			<ClubHero title={_section.title} description={_section.description} />
			<ClubSectionNav activeSection={activeSection} basePath={sectionBasePath} />

			<section className="mx-auto w-full max-w-6xl px-6 py-10">
				{activeSection === 'historia' ? <HistorySection /> : null}
				{activeSection === 'staff-tecnico' ? <StaffSection /> : null}
				{activeSection === 'instalaciones' ? <FacilitiesSection /> : null}
			</section>
		</main>
	);
};

export default ClubPage;
