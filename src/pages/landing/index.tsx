import DeferredSection from '@/components/DeferredSection';

import AboutSection from './components/AboutSection';
import FixtureSection from './components/FixtureSection';
import HeroSection from './components/HeroSection';
import JoinSection from './components/JoinSection';
import NewsSection from './components/NewsSection';
import SponsorsSection from './components/SponsorsSection';
import TeamsSection from './components/TeamsSection';
import { PlayersMarqueeSection } from './components/PlayerCards';

const LandingPage = () => {
	return (
		<main>
			<HeroSection />
			<AboutSection />
			<DeferredSection>
				<PlayersMarqueeSection />
			</DeferredSection>
			<DeferredSection>
				<TeamsSection />
			</DeferredSection>
			<DeferredSection className="hidden">
				<FixtureSection />
			</DeferredSection>
			<DeferredSection>
				<NewsSection />
			</DeferredSection>
			<DeferredSection className="hidden">
				<SponsorsSection />
			</DeferredSection>
			<DeferredSection size="420px">
				<JoinSection />
			</DeferredSection>
		</main>
	);
};

export default LandingPage;
