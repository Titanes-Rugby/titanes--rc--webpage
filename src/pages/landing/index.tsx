import DeferredSection from '@/components/DeferredSection';

import AboutSection from './components/AboutSection';
import FixtureSection from './components/FixtureSection';
import HeroSection from './components/HeroSection';
import JoinSection from './components/JoinSection';
import NewsSection from './components/NewsSection';
import SponsorsSection from './components/SponsorsSection';
import TeamsSection from './components/TeamsSection';
import { PlayerCardsSection, PlayersMarqueeSection } from './components/PlayerCards';

const LandingPage = () => {
	return (
		<main>
			<HeroSection />
			<AboutSection />
			<DeferredSection>
				<PlayerCardsSection />
			</DeferredSection>
			<DeferredSection>
				<PlayersMarqueeSection />
			</DeferredSection>
			<DeferredSection>
				<TeamsSection />
			</DeferredSection>
			<DeferredSection>
				<FixtureSection />
			</DeferredSection>
			<DeferredSection>
				<NewsSection />
			</DeferredSection>
			<DeferredSection>
				<SponsorsSection />
			</DeferredSection>
			<DeferredSection size="420px">
				<JoinSection />
			</DeferredSection>
		</main>
	);
};

export default LandingPage;
