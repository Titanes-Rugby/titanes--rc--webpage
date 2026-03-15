import PlayerCard from '@components/ui/PlayerCard';
import { playerCards } from './playerCards.data';

export function PlayerCardsSection() {
  return (
    <section className="bg-gradient-to-b from-white via-primary-50/45 to-white py-20" aria-labelledby="player-cards-title">
      <div className="container mx-auto space-y-10 px-6 md:px-10">
        <div className="max-w-3xl space-y-3">
          <p className="text-primary-700 text-sm font-semibold tracking-[0.25em] uppercase">Player Profiles</p>
          <h2 id="player-cards-title" className="text-3xl leading-tight font-black text-primary-900 md:text-5xl">
            Tarjetas de jugadores con presencia de nivel profesional
          </h2>
          <p className="text-primary-700 text-lg">
            Diseño editorial, métricas deportivas claras y estructura reusable para escalar el roster sin tocar el layout.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {playerCards.map((player) => (
            <div key={player.id} className="[perspective:1400px]">
              <PlayerCard player={player} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
