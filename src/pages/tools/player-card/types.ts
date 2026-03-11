export type PlayerCardBuilderFormValues = {
  id: string;
  position: string;
  name: string;
  nickname: string;
  imageSrc: string;
  height: string;
  weight: string;
  speed: string;
  birthYear: string;
  reach: string;
  power: string;
  yearsInTeam: string;
  teamName: string;
};

export type PlayerCardPreset = {
  id: string;
  label: string;
  values: PlayerCardBuilderFormValues;
};
