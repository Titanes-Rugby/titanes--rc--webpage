import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

import { dropdownVariants } from './animations';
import type { MenuEntry } from './types';

type DesktopMenuItemProps = {
	entry: MenuEntry;
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
};

const DesktopMenuItem = ({ entry, isOpen, onOpen, onClose }: DesktopMenuItemProps) => {
	if (!entry.children?.length) {
		return (
			<motion.a
				href={entry.href ?? '#'}
				className="rounded-md px-1 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/85 transition-colors hover:text-white"
				whileHover={{ y: -2 }}
			>
				{entry.label}
			</motion.a>
		);
	}

	return (
		<div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
			<motion.button
				type="button"
				className="inline-flex items-center gap-1 rounded-md border-0 bg-transparent px-1 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/85 transition-colors hover:text-white"
				onFocus={onOpen}
				onBlur={onClose}
				whileHover={{ y: -2 }}
			>
				{entry.label}
				<ChevronDownIcon className="h-4 w-4" />
			</motion.button>
			<AnimatePresence>
				{isOpen ? (
					<motion.div
						className="absolute left-1/2 z-50 mt-3 w-[23rem] -translate-x-1/2 rounded-2xl border border-white/20 bg-white/95 p-3 text-titanes-900 shadow-2xl backdrop-blur"
						variants={dropdownVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
					>
						<div className="space-y-1">
							{entry.children.map((child) => (
								<motion.a
									key={child.label}
									href={child.href ?? '#'}
									className="block rounded-xl px-3 py-2 transition-colors hover:bg-titanes-100/70"
									whileHover={{ x: 3 }}
								>
									<p className="text-sm font-semibold text-titanes-900">{child.label}</p>
									{child.description ? <p className="mt-0.5 text-xs text-titanes-700/80">{child.description}</p> : null}
								</motion.a>
							))}
						</div>
					</motion.div>
				) : null}
			</AnimatePresence>
		</div>
	);
};

export default DesktopMenuItem;
