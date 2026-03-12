import AboutSection from './components/AboutSection';
import FixtureSection from './components/FixtureSection';
import HeroSection from './components/HeroSection';
import JoinSection from './components/JoinSection';
import LandingFooter from './components/LandingFooter';
import NewsSection from './components/NewsSection';
import SponsorsSection from './components/SponsorsSection';
import TeamsSection from './components/TeamsSection';
import { PlayerCardsSection } from './components/PlayerCards';

const LandingPage = () => {
	return (
		<main>
			<HeroSection />
			<AboutSection />
			<PlayerCardsSection />
			<TeamsSection />
			<FixtureSection />
			<NewsSection />
			<SponsorsSection />
			<JoinSection />
			<LandingFooter />
		</main>
	);
};

export default LandingPage;
