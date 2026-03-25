import type { ClubSection, ClubSectionId, FacilityItem, StaffMember } from './types';

export const clubSections: ClubSection[] = [
	{
		id: 'quienes-somos',
		label: '¿Quiénes somos?',
		title: '¿Quiénes Somos?',
		description: 'Identidad, misión y visión del club.',
	},
	{
		id: 'historia',
		label: 'Historia',
		title: 'Historia Del Club',
		description: 'Origen, identidad y crecimiento competitivo de Titanes Rugby Club.',
	},
	{
		id: 'staff-tecnico',
		label: 'Personal Administrativo',
		title: 'Personal Administrativo',
		description: 'Cuerpo directivo y personal administrativo que gestiona operaciones y rendimiento del club.',
	},
	{
		id: 'instalaciones',
		label: 'Instalaciones',
		title: 'Instalaciones',
		description: 'Infraestructura para formacion, recuperacion y competencia.',
	},
];

export const staffMembers: StaffMember[] = [
	{
		id: 's1',
		name: 'Diego Alvarado',
		role: 'Director Deportivo',
		birthDate: '1985-04-14',
		imageSrc: '/images/players/player_1.png',
		focus: 'Planificacion estrategica y relacion con liga y patrocinadores.',
	},
	{
		id: 's2',
		name: 'Jorge Salinas',
		role: 'Coordinador Logistico',
		birthDate: '1988-09-02',
		imageSrc: '/images/players/player_1.png',
		focus: 'Viajes, equipamiento y coordinacion de campo y arbitraje.',
	},
	{
		id: 's3',
		name: 'Marco Bernal',
		role: 'Gestor de rendimiento',
		birthDate: '1990-12-11',
		imageSrc: '/images/players/player_1.png',
		focus: 'Monitoreo de cargas, recuperacion y disponibilidad de plantel.',
	},
	{
		id: 's4',
		name: 'Laura Pineda',
		role: 'Jefe de equipo',
		birthDate: '1992-07-23',
		imageSrc: '/images/players/player_1.png',
		focus: 'Operacion diaria del plantel y comunicacion con competencias.',
	},
];

export const facilityItems: FacilityItem[] = [
	{
		id: 'f1',
		title: 'Cancha Principal',
		label: 'Cancha UTP Sede Central',
		location: 'Universidad Tecnologica de Panama, Sede Central',
		imageSrc: 'https://utp.ac.pa/sites/default/files/cuadro_de_softbol_drone_mfn_1.jpg',
		mapUrl:
			'https://www.google.com/maps/place/Cancha+de+f%C3%BAtbol+UTP/@9.0269262,-79.5315247,243m/data=!3m1!1e3!4m6!3m5!1s0x8faca9006d39ce19:0x8ee8a5d0214fb36e!8m2!3d9.0274286!4d-79.5313274!16s%2Fg%2F11x_470spx?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D',
		detail: 'Campo para microciclos semanales, énfasis en técnica y acondicionamiento.',
	},
	{
		id: 'f2',
		title: 'Cancha de juego 1',
		label: 'Estadio Emilio Royo',
		location: 'Parque Lefevre',
		imageSrc:
			'https://scontent.fpac1-3.fna.fbcdn.net/v/t1.6435-9/70827928_2711229645563284_9000110849305608192_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=106&ccb=1-7&_nc_sid=06a7ca&_nc_ohc=W6ZJn4yHKIwQ7kNvwHWLeyw&_nc_oc=Adprbd0chwPEzft3z1lI4y_VvKFtOfMBTybRqCxt9n1IDzOH9PDjkfr9MiMRWaSzT00&_nc_zt=23&_nc_ht=scontent.fpac1-3.fna&_nc_gid=87Q9ZpoI4FF57bftYRXU7w&_nc_ss=7a32e&oh=00_AfyR2aiNJdcjdwMRGgUR0rlt2hpw-GoGbfo_VCCL26ViIw&oe=69E8F6B1',
		mapUrl:
			'https://www.google.com/maps/place/Emilio+Royo+Stadium/@9.03186,-79.4727195,819m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8facab91cc3e6e3d:0x24b5d09ec0015e24!8m2!3d9.0318547!4d-79.4701446!16s%2Fg%2F11h_7bdgml?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D',
		detail: 'Sede de juegos oficiales y amistosos con graderías y camerinos.',
	},
	{
		id: 'f3',
		title: 'Cancha de juego 2',
		label: 'Ciudad del Saber',
		location: 'Clayton',
		imageSrc:
			'https://lh3.googleusercontent.com/gps-cs-s/AHVAweqTCdjNn0kj1EoCFVNbbhyZJ0A_G-U2PAO0pkPuAEWMJDEgdWBZI2bCKuTP-zvx_VOAhuaJRs4CfRIt4MD7yW2dk7kozCt1NzWIfRb-f8e7Y2yw3ja6SHIdRfmaNObsngUG_5Lq=w408-h306-k-no',
		mapUrl:
			'https://www.google.com/maps/place/Clayton+Soccer+Field+%2F+Golf+Range/@9.0004872,-79.580136,145m/data=!3m1!1e3!4m16!1m9!3m8!1s0x8faca7b0a46a3bd1:0x93b801d16c74cc5c!2sCity+of+Knowledge,+Panama+City,+Panam%C3%A1+Province!3b1!8m2!3d9.0014031!4d-79.5814145!10e5!16zL20vMDk1dzc0!3m5!1s0x8faca7cba901cf37:0x5a49df2b24b113b8!8m2!3d9.0001695!4d-79.5794872!16s%2Fg%2F11b7svlpdd?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D',
		detail: 'Superficie alterna para rotar cargas y jugar torneos relámpago.',
	},
	{
		id: 'f4',
		title: 'Cancha de entrenamiento 2',
		label: 'Cancha UTP Sede Tocumen',
		location: 'Tocumen',
		imageSrc:
			'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=4dBuVLqzJcqluL_xyD4T7w&cb_client=search.gws-prod.gps&w=408&h=240&yaw=249.55864&pitch=0&thumbfov=100',
		mapUrl:
			'https://www.google.com/maps/place/Cancha+de+f%C3%BAtbol+UTP+(Sede+Tocumen)/@9.0681909,-79.4093666,819m/data=!3m1!1e3!4m6!3m5!1s0x8fab559809b8dff1:0x4ac7fe7ed12fdfc9!8m2!3d9.0680929!4d-79.4068053!16s%2Fg%2F11y1m3sp_j?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D',
		detail: 'Espacio de desarrollo para academias y sesiones especializadas.',
	},
];

export const getClubSection = (slug?: string): ClubSection => {
	const section = clubSections.find((item) => item.id === slug);
	return section ?? clubSections[0];
};

export const isClubSection = (value?: string): value is ClubSectionId => {
	return clubSections.some((item) => item.id === value);
};
