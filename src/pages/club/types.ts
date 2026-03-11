export type ClubSectionId = 'historia' | 'staff-tecnico' | 'instalaciones';

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
  focus: string;
};

export type FacilityItem = {
  id: string;
  title: string;
  detail: string;
};
