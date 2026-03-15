import LogoSvg from '@/assets/logo.svg?react';
import { cn } from '@/utils/cn';

type LogoSize = 'sm' | 'md' | 'lg';
type LogoTone = 'primary' | 'light';

interface LogoProps {
	size?: LogoSize;
	tone?: LogoTone;
	className?: string;
	label?: string;
}

const sizeClassByValue: Record<LogoSize, string> = {
	sm: 'h-10 w-auto',
	md: 'h-14 w-auto',
	lg: 'h-20 w-auto',
};

const toneClassByValue: Record<LogoTone, string> = {
	primary: 'fill-primary-500',
	light: 'fill-white',
};

const Logo = ({ size = 'md', tone = 'primary', className, label = 'Titanes Rugby Club' }: LogoProps) => {
	return (
		<LogoSvg role="img" aria-label={label} className={cn(sizeClassByValue[size], toneClassByValue[tone], className)} />
	);
};

export default Logo;
