import Menu from '@components/Menu';

import AboutSection from './components/AboutSection';
import FixtureSection from './components/FixtureSection';
import HeroSection from './components/HeroSection';
import JoinSection from './components/JoinSection';
import LandingFooter from './components/LandingFooter';
import NewsSection from './components/NewsSection';
import SponsorsSection from './components/SponsorsSection';
import TeamsSection from './components/TeamsSection';

const LandingPage = () => {
	return (
		<main>
			<Menu />
			<HeroSection />
			<AboutSection />
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
