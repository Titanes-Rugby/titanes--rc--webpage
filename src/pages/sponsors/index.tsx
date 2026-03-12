import SponsorsGrid from './components/SponsorsGrid';
import SponsorsHero from './components/SponsorsHero';
import SponsorsMarquee from './components/SponsorsMarquee';
import { sponsors } from './sponsors.data';

const SponsorsPage = () => {
  return (
    <main className="bg-titanes-50 min-h-screen">
      <SponsorsHero />
      <section className="mx-auto w-full max-w-6xl space-y-6 px-6 py-10">
        <SponsorsMarquee names={sponsors.map((item) => item.name)} />
        <SponsorsGrid sponsors={sponsors} />
      </section>
    </main>
  );
};

export default SponsorsPage;
