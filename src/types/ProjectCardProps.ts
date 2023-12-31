type toolsType = 
	'React' | 'NextJs' | 'Typescript' |
	'Javascript' | 'Sass' | 'Tailwind' |
	'CSS' | 'HTML' | 'Firebase';

export type ProjectCardProps = {
	linkUrl: string;
	gitUrl: string;
	imgUrl: string;
	imgAlt: string;
	title: string;
	description: string;
	tools: toolsType[];
}