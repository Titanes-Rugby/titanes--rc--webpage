import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

import AnimatedTiltCard from '@ui/AnimatedTiltCard';
import Logo from '@ui/Logo';
import { cn } from '@/utils/cn';

import { PlayerMetricItem } from './PlayerMetricItem';
import type { PlayerCardData } from './types';

type PlayerCardProps = {
	player: PlayerCardData;
};

const chunkMetrics = <T,>(items: T[], chunkSize: number): T[][] => {
	const rows: T[][] = [];

	for (let i = 0; i < items.length; i += chunkSize) rows.push(items.slice(i, i + chunkSize));

	return rows;
};

const PlayerCard = ({ player }: PlayerCardProps) => {
	const metricRows = chunkMetrics(player.metrics, 2);

	return (
		<AnimatedTiltCard scrollTilt>
			{({ contentX, contentY, contentScale }) => (
				<>
					<div
						className="absolute top-0 right-6 h-3 w-40 rounded-b-full bg-accent-500 sm:w-56 md:w-72"
						aria-hidden="true"
					/>
					<div className="grid xl:grid-cols-[1.02fr_1fr]">
						<div className="relative isolate min-h-[440px] overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 p-5 sm:p-8">
							<Logo
								tone="light"
								label="Titanes Rugby Club watermark"
								className="pointer-events-none absolute top-1/2 left-1/2 h-[150%] w-auto max-w-none -translate-x-[46%] -translate-y-1/2 opacity-30 transition-transform duration-500 ease-out group-hover/card:scale-110"
							/>
							<div className="pointer-events-none absolute inset-0 bg-linear-to-r from-transparent via-white/6 to-transparent" />
							{player.imageSrc ? (
								<motion.img
									src={player.imageSrc}
									alt={player.name}
									className="absolute bottom-0 left-0 h-[92%] w-full object-contain object-bottom drop-shadow-[0_12px_28px_rgba(0,0,0,0.45)] transition-[filter] duration-300 ease-out group-hover/card:brightness-110"
									loading="lazy"
									style={{ x: contentX, y: contentY, scale: contentScale }}
									transition={{ type: 'spring', stiffness: 180, damping: 22 }}
								/>
							) : null}
						</div>

						<div className="min-w-0 space-y-6 p-6 pt-10 text-white sm:space-y-8 sm:p-8 sm:pt-12">
							<header className="space-y-4">
								<p className="text-sm font-medium tracking-[0.18em] text-white/90 uppercase sm:text-base">
									Position · {player.position}
								</p>
								<h3 className="line-clamp-2 text-4xl leading-[0.92] font-black tracking-tight uppercase sm:text-5xl 2xl:text-6xl">
									{player.name} {player.nickname}
								</h3>
							</header>

							<div className="divide-y divide-white/35 border-y border-white/35">
								{metricRows.map((row, rowIndex) => (
									<div key={`${player.id}-row-${rowIndex}`} className="grid grid-cols-2 gap-3 py-4 sm:py-5">
										{row.map((item, itemIndex) => (
											<PlayerMetricItem
												key={item.id}
												item={item}
												className={cn(itemIndex === 1 && 'justify-end text-right')}
											/>
										))}
									</div>
								))}
							</div>

							<footer className="flex flex-wrap items-end justify-between gap-4 pt-2">
								<div className="flex min-w-0 items-center gap-2.5 text-white sm:gap-3">
									<Shield className="h-8 w-8 shrink-0 sm:h-10 sm:w-10" aria-hidden="true" />
									<p className="text-4xl leading-none font-black tracking-tight sm:text-5xl">{player.yearsInTeam}</p>
									<p className="text-base leading-[0.9] font-medium lowercase sm:text-lg">
										years
										<br />
										in club
									</p>
								</div>
								<Logo
									tone="light"
									label={player.teamName}
									className="h-16 w-auto shrink-0 opacity-90 transition-transform duration-300 ease-out sm:h-20"
								/>
							</footer>
						</div>
					</div>
				</>
			)}
		</AnimatedTiltCard>
	);
};

export default PlayerCard;
export type { PlayerCardData, PlayerMetric } from './types';
