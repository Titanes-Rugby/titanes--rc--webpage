import { ReactNode } from 'react';
import clsx from 'clsx';

interface Props {
	backgroundImage: string;
	children: ReactNode;
}

const Parallax = ({ children, backgroundImage }: Props) => {
	return (
		<section className="relative w-full">
			<div
				className={clsx(
					'h-screen flex items-center justify-center',
					"before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-screen",
					`before:bg-try`,
					'before:bg-fixed before:bg-center before:bg-cover',
					"after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-screen after:bg-titanes-900 after:opacity-80 after:z-0",
				)}
			>
				<div className="z-[3]">{children}</div>
			</div>
		</section>
	);
};

export const WithBackground = ({ children, backgroundImage }: Props) => {
	return (
		<section
			className={clsx(
				'relative w-full bg-titanes-600',
				'pt-16 pb-8',
				'bg-rhino bg-fixed bg-center bg-cover',
				// "before:absolute before:content-[''] before:top-0 before:left-0 before:bottom-0 before:w-full",
				// `before:bg-rhino`,
				// 'before:bg-fixed before:bg-center before:bg-cover',
			)}
		>
			<div className={clsx('bg-white opacity-95 transition-all top-0 left-0 absolute h-full w-full')} />
			<div className="relative">{children}</div>
		</section>
	);
};
export default Parallax;
