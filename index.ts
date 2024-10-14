import { select } from '@inquirer/prompts';

// type createBaseOptions = {
// 	platform: 'nextjs' | 'react';
// 	nextType: 'app-route' | 'page-route';
// 	store: 'redux' | 'zustand';
// 	uiLib: 'antd' | 'mui' | 'shadcn' | 'next-ui';
// 	form: 'react-hook-form' | 'none';
// };

const platform = await select({
	message: 'Select your platform',
	choices: [
		{
			name: 'Nextjs',
			value: 'nextjs',
			description: 'nextjs start kit',
		},
		{
			name: 'React with Vite',
			value: 'react',
			description: 'react project with vite',
		},
	],
});
if (platform === 'nextjs') {
	const nextType = await select({
		message: 'Select type of nextjs route',
		choices: [
			{
				name: 'App route',
				value: 'app-route',
				description: 'new routing mechanism nextjs ',
			},
			{
				name: 'Page route',
				value: 'page-route',
				description: 'old routing mechanism nextjs',
			},
		],
	});
	const orm = await select({
		message: 'Select type of orm',
		choices: [
			{
				name: 'Prisma',
				value: 'prisma',
			},
			{
				name: 'Drizzle',
				value: 'drizzle',
			},
			{
				name: 'None',
				value: 'none',
			},
		],
	});
	const httpRequest = await select({
		message: 'Select httpRequest type',
		choices: [
			{
				name: 'trpc',
				value: 'trpc',
			},
			{
				name: 'grapql',
				value: 'grapql',
			},
			{
				name: 'none',
				value: 'none',
			},
		],
	});
}

const store = await select({
	message: 'Select type of store',
	choices: [
		{
			name: 'Redux',
			value: 'redux',
		},
		{
			name: 'Zustand',
			value: 'zustand',
		},
		{
			name: 'None',
			value: 'none',
		},
	],
});
const uiLib = await select({
	message: 'Select type of ui',
	choices: [
		{
			name: 'antd',
			value: 'antd',
		},
		{
			name: 'MUI',
			value: 'mui',
		},
		{
			name: 'shadcn',
			value: 'shadcn',
		},
		{
			name: '@next-ui',
			value: 'next-ui',
		},
		{
			name: 'none',
			value: 'none',
		},
	],
});
const form = await select({
	message: 'Select type of form',
	choices: [
		{
			name: 'react-hook-form',
			value: 'react-hook-form',
		},
		{
			name: 'none',
			value: 'none',
		},
	],
});
const carousel = await select({
	message: 'Select type of carousel',
	choices: [
		{
			name: 'swiper',
			value: 'swiper',
			description: 'full feature but quire heavy',
		},
		{
			name: 'alice-carousel',
			value: 'alice-carousel',
			description: 'still have issue but small chunk',
		},
		{
			name: 'none',
			value: 'none',
		},
	],
});
