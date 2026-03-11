import PlayerCard from '@components/ui/PlayerCard';
import { playerCards } from '@/pages/landing/components/PlayerCards/playerCards.data';

const PlayerCardPreview = () => {
  const featuredPlayer = playerCards[0];

  if (!featuredPlayer) return null;

  return (
    <div className="[perspective:1400px]">
      <PlayerCard player={featuredPlayer} />
    </div>
  );
};

export default PlayerCardPreview;
