import { PlayerPortrait } from '@components/ui';
import { playerCards } from '@/pages/landing/components/PlayerCards/playerCards.data';

const PlayerPortraitPreview = () => {
  const [firstPlayer, secondPlayer] = playerCards;
  if (!firstPlayer?.imageSrc || !secondPlayer?.imageSrc) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <PlayerPortrait
        imageSrc={firstPlayer.imageSrc}
        alt={firstPlayer.name}
        number="08"
        className="rounded-2xl"
      />
      <PlayerPortrait
        imageSrc={secondPlayer.imageSrc}
        alt={secondPlayer.name}
        number="01"
        className="rounded-2xl"
        imageClassName="scale-[1.02]"
      />
    </div>
  );
};

export default PlayerPortraitPreview;
