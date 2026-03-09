import AboutSection from './components/AboutSection';
import FixtureSection from './components/FixtureSection';
import HeroSection from './components/HeroSection';
import JoinSection from './components/JoinSection';
import LandingFooter from './components/LandingFooter';
import NewsSection from './components/NewsSection';
import SponsorsSection from './components/SponsorsSection';
import TeamsSection from './components/TeamsSection';
import UiShowcaseSection from './components/UiShowcaseSection';

const LandingPage = () => {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<TeamsSection />
			<FixtureSection />
			<NewsSection />
			<SponsorsSection />
			<UiShowcaseSection />
			<JoinSection />
			<LandingFooter />
		</>
	);
};

export default LandingPage;
