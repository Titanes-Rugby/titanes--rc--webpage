import Logo from '@ui/Logo';
import { cn } from '@/utils/cn';

type PlayerPortraitProps = {
	imageSrc: string;
	alt: string;
	number?: string;
	showFlag?: boolean;
	className?: string;
	imageClassName?: string;
	numberClassName?: string;
};

const PlayerPortrait = ({
	imageSrc,
	alt,
	number,
	showFlag,
	className,
	imageClassName,
	numberClassName,
}: PlayerPortraitProps) => {
	return (
		<div
			className={cn(
				'relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-primary-300 to-primary-500',
				className,
			)}
		>
			<Logo
				tone="light"
				label="Titanes Rugby Club watermark"
				className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[140%] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 opacity-20"
			/>
			<img
				src={imageSrc}
				alt={alt}
				className={cn('relative z-10 h-full w-full object-cover object-top', imageClassName)}
			/>
			{number ? (
				<div className="absolute top-3 right-3 z-20 flex flex-col items-center gap-1">
					<div
						className={cn('rounded-full bg-primary-900/85 px-2.5 py-1 text-xs font-bold text-white', numberClassName)}
					>
						#{number}
					</div>
					{showFlag ? (
						<img
							src="/images/background/panama.png"
							alt="Bandera de Panama"
							className="h-4 w-6 rounded-[2px] object-cover shadow-sm"
						/>
					) : null}
				</div>
			) : null}
		</div>
	);
};

export default PlayerPortrait;
