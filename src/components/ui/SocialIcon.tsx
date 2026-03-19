import type { SVGProps } from 'react';

type SocialIconName = 'instagram' | 'tiktok' | 'facebook' | 'youtube';

type SocialIconProps = SVGProps<SVGSVGElement> & {
	name: SocialIconName;
};

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...props}>
		<path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4Zm8.88 1.25a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0ZM12 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5Zm0 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3Z" />
	</svg>
);

const TikTokIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...props}>
		<path d="M14.75 3.5a4.5 4.5 0 0 0 .25 1.57 4.49 4.49 0 0 0 3.45 3.06v2.16a6.58 6.58 0 0 1-3.7-1.2v6.53a5.82 5.82 0 1 1-5.82-5.83c.27 0 .53.02.79.06v2.25a2.94 2.94 0 0 0-.79-.1 2.93 2.93 0 1 0 2.93 2.93V3.5h2.89Z" />
	</svg>
);

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...props}>
		<path d="M22 12.07A10 10 0 1 0 10.16 22v-7h-2.3v-2.9h2.3v-2.2c0-2.27 1.36-3.53 3.44-3.53.99 0 2.04.18 2.04.18v2.25h-1.15c-1.13 0-1.48.7-1.48 1.42v1.88h2.52l-.4 2.9h-2.12V22A10 10 0 0 0 22 12.07Z" />
	</svg>
);

const YoutubeIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...props}>
		<path d="M21.55 7.2a2.52 2.52 0 0 0-1.77-1.78C18.27 5 12 5 12 5s-6.27 0-7.78.42A2.52 2.52 0 0 0 2.45 7.2 26.35 26.35 0 0 0 2 12a26.35 26.35 0 0 0 .45 4.8 2.52 2.52 0 0 0 1.77 1.78C5.73 19 12 19 12 19s6.27 0 7.78-.42a2.52 2.52 0 0 0 1.77-1.78A26.35 26.35 0 0 0 22 12a26.35 26.35 0 0 0-.45-4.8ZM10 15.27V8.73L15.18 12Z" />
	</svg>
);

const iconMap: Record<SocialIconName, (props: SVGProps<SVGSVGElement>) => JSX.Element> = {
	instagram: InstagramIcon,
	tiktok: TikTokIcon,
	facebook: FacebookIcon,
	youtube: YoutubeIcon,
};

const SocialIcon = ({ name, ...props }: SocialIconProps) => {
	const Icon = iconMap[name];
	return <Icon width="20" height="20" {...props} />;
};

export type { SocialIconName };
export default SocialIcon;
