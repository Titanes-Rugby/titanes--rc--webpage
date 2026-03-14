import logoTitanes from '@/assets/logoTitanes.PNG';
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
	primary: '',
	light: '',
};

const Logo = ({
	size = 'md',
	tone = 'primary',
	className,
	label = 'Titanes Rugby Club',
}: LogoProps) => {
	return (
		<img
			role="img"
			aria-label={label}
			alt={label}
			src={logoTitanes}
			className={cn(sizeClassByValue[size], toneClassByValue[tone], className)}
		/>
	);
};

export default Logo;

