import { useState } from 'react';

import { Dialog } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Logo from '@ui/Logo';
import { mobileGroupVariants, mobileItemVariants, overlayVariants, panelVariants } from './menuAnimations';
import { Bars3Icon, ChevronDownIcon, MENU_ENTRIES, getMenuIcon } from './menuConfig';

type MobileMenuProps = {
	mobileMenuOpen: boolean;
	setMobileMenuOpen: (value: boolean) => void;
};

const MobileMenu = ({ mobileMenuOpen, setMobileMenuOpen }: MobileMenuProps) => {
	const [expandedSection, setExpandedSection] = useState<string | null>(null);

	return (
		<AnimatePresence>
			{mobileMenuOpen ? (
				<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen} static>
					<motion.div
						className="fixed inset-0 z-40 bg-primary-900/55 backdrop-blur-[2px]"
						variants={overlayVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
					/>
					<Dialog.Panel
						as={motion.div}
						className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 shadow-2xl sm:max-w-sm"
						initial="hidden"
						animate="visible"
						exit="exit"
						variants={panelVariants}
					>
						<div className="flex items-center justify-between border-b border-primary-100 pb-4">
							<Link to="/" className="-m-1.5 p-1.5">
								<span className="sr-only">Titanes Rugby Club</span>
								<Logo className="h-14 w-auto fill-primary-500" />
							</Link>
							<motion.button
								type="button"
								className="cursor-pointer rounded-full border border-primary-200 bg-transparent p-2 text-primary-700"
								onClick={() => setMobileMenuOpen(false)}
								whileTap={{ scale: 0.94 }}
							>
								<span className="sr-only">Close menu</span>
								<Bars3Icon className="h-5 w-5 rotate-90 transform text-primary-700" aria-hidden="true" />
							</motion.button>
						</div>

						<motion.div className="mt-6 space-y-2" variants={mobileGroupVariants} initial="hidden" animate="visible">
							{MENU_ENTRIES.map((entry) => {
								const EntryIcon = getMenuIcon(entry.label);

								if (!entry.children?.length) {
									return (
										<motion.div key={entry.label} variants={mobileItemVariants}>
											<Link
												to={entry.href as string}
												className="flex cursor-pointer items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-primary-900 transition-colors hover:bg-primary-100"
												onClick={() => setMobileMenuOpen(false)}
											>
												<EntryIcon className="h-4 w-4 text-primary-600" />
												{entry.label}
											</Link>
										</motion.div>
									);
								}

								const isExpanded = expandedSection === entry.label;

								return (
									<motion.div
										key={entry.label}
										className="rounded-xl border border-primary-100"
										variants={mobileItemVariants}
									>
										<button
											type="button"
											className="flex w-full cursor-pointer items-center justify-between border-0 bg-transparent px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.12em] text-primary-900"
											onClick={() => setExpandedSection(isExpanded ? null : entry.label)}
											aria-expanded={isExpanded}
										>
											<span className="inline-flex items-center gap-2">
												<EntryIcon className="h-4 w-4 text-primary-600" />
												{entry.label}
											</span>
											<motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
												<ChevronDownIcon className="h-4 w-4" />
											</motion.span>
										</button>
										<AnimatePresence initial={false}>
											{isExpanded ? (
												<motion.div
													className="space-y-1 px-2 pb-2"
													initial={{ height: 0, opacity: 0 }}
													animate={{ height: 'auto', opacity: 1 }}
													exit={{ height: 0, opacity: 0 }}
													transition={{ duration: 0.2 }}
												>
													{entry.children.map((child) => {
														const ChildIcon = getMenuIcon(child.label);
														return (
															<Link
																key={child.label}
																to={child.href as string}
																className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm text-primary-700 transition-colors hover:bg-primary-50 hover:text-primary-900"
																onClick={() => setMobileMenuOpen(false)}
															>
																<ChildIcon className="h-4 w-4 text-primary-500" />
																{child.label}
															</Link>
														);
													})}
												</motion.div>
											) : null}
										</AnimatePresence>
									</motion.div>
								);
							})}
						</motion.div>
					</Dialog.Panel>
				</Dialog>
			) : null}
		</AnimatePresence>
	);
};

export default MobileMenu;
