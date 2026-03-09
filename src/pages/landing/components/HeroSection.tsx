import CountUpStat from '@components/CountUpStat';
import { Button } from '@components/ui';

import Parallax from '@components/Parallax';

const HeroSection = () => {
	return (
		<Parallax backgroundImage="images/background/1103840.jpg">
			<section className="mx-auto w-full max-w-6xl px-6 pt-20 md:pt-28">
				<div className="max-w-3xl rounded-2xl border border-white/20 bg-black/25 p-6 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.8)] backdrop-blur-sm md:p-9">
					<p className="mb-5 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-titanes-100">
						Titanes Rugby Club
					</p>
					<h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
						Rugby de alto nivel,
						<span className="block text-titanes-200">formaci&oacute;n con identidad.</span>
					</h1>
					<p className="mt-5 max-w-2xl text-base leading-relaxed text-titanes-100/90 md:text-lg">
						Competimos con intensidad y construimos una comunidad s&oacute;lida dentro y fuera de la cancha. Descubre
						nuestros equipos, calendario y noticias del club.
					</p>
					<div className="mt-8 flex flex-wrap items-center gap-3">
						<Button
							variant="light"
							appearance="filled"
							size="lg"
							onClick={() => (window.location.hash = 'fixture')}
						>
							Ver Fixture
						</Button>
						<Button
							variant="light"
							appearance="outline"
							size="lg"
							onClick={() => (window.location.hash = 'contacto')}
						>
							Unirme al Club
						</Button>
					</div>
					<div className="mt-8 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
						<CountUpStat end={200} suffix="+" label="Jugadores activos" />
						<CountUpStat end={3} label="Divisiones competitivas" />
						<CountUpStat end={10} suffix="+" label="A&ntilde;os de historia" />
					</div>
				</div>
			</section>
		</Parallax>
	);
};

export default HeroSection;
