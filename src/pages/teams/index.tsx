import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';

import CoachesPanel from './components/CoachesPanel';
import PlayersPanel from './components/PlayersPanel';
import StatsPanel from './components/StatsPanel';
import TeamsHero from './components/TeamsHero';
import TeamsTabs from './components/TeamsTabs';
import { findTeamBySlug, teamProfiles } from './teams.data';
import { isTeamTab } from './types';

const TeamsPage = () => {
	const { slug, tab } = useParams<{ slug?: string; tab?: string }>();
	const team = useMemo(() => findTeamBySlug(slug), [slug]);
	const activeTab = isTeamTab(tab) ? tab : 'players';
	const tabBasePath = `/equipos/${team.slug}`;
	const allPlayers = useMemo(
		() =>
			teamProfiles.flatMap((profile) =>
				profile.players.map((player) => ({
					...player,
					team: player.team ?? profile.title,
				}))
			),
		[]
	);

	return (
		<main className="bg-primary-50 min-h-screen">
			<TeamsHero team={team} />
			<TeamsTabs activeTab={activeTab} basePath={tabBasePath} />

			<section className="mx-auto w-full max-w-6xl space-y-8 px-6 py-8">

				{activeTab === 'players' ? <PlayersPanel players={allPlayers} /> : null}
				{activeTab === 'coaches' ? <CoachesPanel coaches={team.coaches} /> : null}
				{activeTab === 'stats' ? <StatsPanel stats={team.stats} /> : null}

				<article className="rounded-2xl bg-primary-800 p-7 text-white">
					<p className="text-xs font-semibold tracking-[0.12em] text-primary-100 uppercase">Club CTA</p>
					<h2 className="mt-2 text-2xl font-bold">Quieres formar parte del roster de Titanes?</h2>
					<p className="mt-2 max-w-2xl text-sm text-primary-100/90">
						Escribe al staff tecnico y agenda una sesion de evaluacion para la proxima temporada.
					</p>
					<Link
						to="/contacto"
						className="mt-5 inline-flex rounded-xl bg-white px-4 py-2 text-xs font-semibold tracking-[0.12em] text-primary-900 uppercase"
					>
						Contactar al club
					</Link>
				</article>
			</section>
		</main>
	);
};

export default TeamsPage;
