import { getAgeFromBirthDate } from '@utils/date';

import { staffMembers } from '../club.data';

const StaffSection = () => {
	return (
		<section className="space-y-6">
			<div className="max-w-3xl">
				<h2 className="text-3xl font-bold text-primary-900">Personal Administrativo</h2>
				<p className="mt-2 text-sm leading-relaxed text-primary-700">
					Equipo directivo y administrativo que coordina operaciones, soporte y rendimiento integral del club.
				</p>
			</div>
			<div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
				{staffMembers.map((member) => (
					<article key={member.id} className="flex gap-4 rounded-2xl border border-primary-100 bg-white p-5 shadow-sm">
						<div className="h-28 w-28 overflow-hidden rounded-xl border border-primary-100 bg-primary-50 shadow-sm">
							<img
								src={member.imageSrc ?? '/images/players/player_1.png'}
								alt={member.name}
								className="h-full w-full object-cover object-top"
							/>
						</div>
						<div className="space-y-1">
							<p className="text-sm font-semibold tracking-[0.1em] text-primary-600 uppercase">{member.role}</p>
							<h3 className="text-xl font-black text-primary-900">{member.name}</h3>
							<p className="text-xs font-semibold text-primary-600">Edad: {getAgeFromBirthDate(member.birthDate)}</p>
							<p className="text-sm leading-relaxed text-primary-700">{member.focus}</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default StaffSection;
