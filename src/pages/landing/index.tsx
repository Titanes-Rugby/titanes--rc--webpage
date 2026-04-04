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
			<PlayerCardsSection />
			<PlayersMarqueeSection />
			<TeamsSection />
			<FixtureSection />
			<NewsSection />
			<SponsorsSection />
			<JoinSection />
		</main>
	);
};

export default LandingPage;
