import { type FocusEvent, useEffect, useRef } from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import {
	dropdownIconVariants,
	dropdownItemVariants,
	dropdownVariants,
	topMenuIconVariants,
	topMenuItemVariants,
} from './menuAnimations';
import { ChevronDownIcon, getMenuIcon, type MenuEntry } from './menuConfig';

const MotionLink = motion(Link);

type DesktopMenuItemProps = {
	entry: MenuEntry;
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
};

const DesktopMenuItem = ({ entry, isOpen, onOpen, onClose }: DesktopMenuItemProps) => {
	const EntryIcon = getMenuIcon(entry.label);
	const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const clearCloseTimeout = () => {
		if (closeTimeoutRef.current === null) return;
		clearTimeout(closeTimeoutRef.current);
		closeTimeoutRef.current = null;
	};

	const runClose = () => onClose();

	const handleOpen = () => {
		clearCloseTimeout();
		onOpen();
	};

	const handleCloseWithDelay = () => {
		clearCloseTimeout();
		closeTimeoutRef.current = setTimeout(() => {
			closeTimeoutRef.current = null;
			runClose();
		}, 220);
	};

	const handleBlurWithin = (event: FocusEvent<HTMLDivElement>) => {
		const currentTarget = event.currentTarget;
		window.requestAnimationFrame(() => {
			if (!currentTarget.contains(document.activeElement)) {
				clearCloseTimeout();
				runClose();
			}
		});
	};

	useEffect(() => () => clearCloseTimeout(), []);

	if (!entry.children?.length) {
		return (
			<MotionLink
				to={entry.href as string}
				className="inline-flex cursor-pointer items-center gap-1.5 rounded-md px-1 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/85 transition-colors hover:text-white"
				initial="rest"
				animate="rest"
				whileHover="hover"
				variants={topMenuItemVariants}
			>
				<motion.span
					className="overflow-hidden text-white/90"
					variants={topMenuIconVariants}
					transition={{ duration: 0.2 }}
				>
					<EntryIcon className="h-4 w-4" />
				</motion.span>
				{entry.label}
			</MotionLink>
		);
	}

	return (
		<div
			className="relative"
			onMouseEnter={handleOpen}
			onMouseLeave={handleCloseWithDelay}
			onFocusCapture={handleOpen}
			onBlur={handleBlurWithin}
		>
			<motion.button
				type="button"
				className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border-0 bg-transparent px-1 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/85 transition-colors hover:text-white"
				initial="rest"
				animate="rest"
				whileHover="hover"
				variants={topMenuItemVariants}
			>
				<motion.span
					className="overflow-hidden text-white/90"
					variants={topMenuIconVariants}
					transition={{ duration: 0.2 }}
				>
					<EntryIcon className="h-4 w-4" />
				</motion.span>
				{entry.label}
				<ChevronDownIcon className="h-4 w-4" />
			</motion.button>
			{isOpen ? (
				<motion.div
					className="absolute left-1/2 z-50 mt-3 w-[23rem] -translate-x-1/2 rounded-2xl border border-white/20 bg-white/95 p-3 text-primary-900 shadow-2xl backdrop-blur"
					initial="hidden"
					animate="visible"
					variants={dropdownVariants}
					onMouseEnter={handleOpen}
					onMouseLeave={handleCloseWithDelay}
				>
					<div className="space-y-1">
						{entry.children.map((child) => {
							const ChildIcon = getMenuIcon(child.label);
							return (
								<MotionLink
									key={child.label}
									to={child.href as string}
									className="flex cursor-pointer items-start gap-2 rounded-xl px-3 py-2 transition-colors hover:bg-primary-100/70"
									initial="rest"
									animate="rest"
									whileHover="hover"
									variants={dropdownItemVariants}
								>
									<motion.span
										className="mt-0.5 text-primary-600"
										variants={dropdownIconVariants}
										transition={{ duration: 0.18 }}
									>
										<ChildIcon className="h-4 w-4" />
									</motion.span>
									<div>
										<p className="text-sm font-semibold text-primary-900">{child.label}</p>
										<p className="mt-0.5 text-xs text-primary-700/80">{child.description}</p>
									</div>
								</MotionLink>
							);
						})}
					</div>
				</motion.div>
			) : null}
		</div>
	);
};

export default DesktopMenuItem;
