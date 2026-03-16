export type ClubSectionId = 'quienes-somos' | 'historia' | 'staff-tecnico' | 'instalaciones';

export type ClubSection = {
	id: ClubSectionId;
	label: string;
	title: string;
	description: string;
};

export type StaffMember = {
  id: string;
  name: string;
  role: string;
  imageSrc?: string;
  birthDate?: string;
  focus: string;
};

export type FacilityItem = {
	id: string;
	title: string;
	detail: string;
	imageSrc?: string;
	label?: string;
	location?: string;
	mapUrl?: string;
};
