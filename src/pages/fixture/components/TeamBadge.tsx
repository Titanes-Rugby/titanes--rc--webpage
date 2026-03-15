type TeamBadgeProps = {
  name: string;
  logoSrc?: string;
};

const initialsFromName = (value: string) => {
  return value
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
};

const TeamBadge = ({ name, logoSrc }: TeamBadgeProps) => {
  if (logoSrc) {
    return (
      <div className="flex items-center gap-2">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-200 bg-white p-1.5">
          <img src={logoSrc} alt={`Logo ${name}`} className="h-full w-full object-contain" />
        </span>
        <span className="text-sm font-semibold text-primary-900">{name}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-700 text-xs font-black tracking-[0.08em] text-white">
        {initialsFromName(name)}
      </span>
      <span className="text-sm font-semibold text-primary-900">{name}</span>
    </div>
  );
};

export default TeamBadge;
