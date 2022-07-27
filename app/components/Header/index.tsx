import React, { FC, useState } from 'react';
import {
	Text,
	Header as ManHeader,
	Title,
	createStyles,
	Divider,
	Group,
	TextInput,
	ActionIcon,
	Tabs,
	Anchor,
} from '@mantine/core';
import { IconUserCircle, IconShoppingCart, IconHeart } from '@tabler/icons';

const HEADER_HEIGHT = 84;

const useStyles = createStyles((theme) => ({
	navLogo: {
		letterSpacing: '0.15rem',
	},
	navLeftGroup: {
		flexGrow: 1,
	},
	navSearchInput: {
		flexGrow: 1,
	},

	inner: {
		height: HEADER_HEIGHT,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	burger: {
		[theme.fn.largerThan('sm')]: {
			display: 'none',
		},
	},

	links: {
		paddingTop: theme.spacing.lg,
		height: HEADER_HEIGHT,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',

		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},

	mainLinks: {
		marginRight: -theme.spacing.sm,
	},

	mainLink: {
		textTransform: 'uppercase',
		fontSize: 13,
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[1]
				: theme.colors.gray[6],
		padding: `7px ${theme.spacing.sm}px`,
		fontWeight: 700,
		borderBottom: '2px solid transparent',
		transition: 'border-color 100ms ease, color 100ms ease',

		'&:hover': {
			color: theme.colorScheme === 'dark' ? theme.white : theme.black,
			textDecoration: 'none',
		},
	},

	secondaryLink: {
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[2]
				: theme.colors.gray[6],
		fontSize: theme.fontSizes.xs,
		textTransform: 'uppercase',
		transition: 'color 100ms ease',

		'&:hover': {
			color: theme.colorScheme === 'dark' ? theme.white : theme.black,
			textDecoration: 'none',
		},
	},

	mainLinkActive: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		borderBottomColor:
			theme.colors[theme.primaryColor][
				theme.colorScheme === 'dark' ? 5 : 6
			],
	},
}));
interface LinkProps {
	label: string;
	link: string;
}
const mainLinks: LinkProps[] = [
	{ label: 'New Arrivals', link: '/new-arrivals' },
	{ label: 'Box Sets', link: '/box-sets' },
	{ label: 'Best sellers', link: '/best-sellers' },
	{ label: 'Fiction Books', link: '/fiction-books' },
	{ label: 'Award Winners', link: '/award-winners' },
	{ label: 'Featured Authors', link: '/featured-authors' },
	{ label: 'Request a Book', link: '/request-book' },
];

export const Header: FC = () => {
	const { classes, cx } = useStyles();
	const [active, setActive] = useState<number>();
	const mainItems = mainLinks.map((item, index) => (
		<Anchor<'a'>
			href={item.link}
			key={item.label}
			className={cx(classes.mainLink, {
				[classes.mainLinkActive]: index === active,
			})}
			onClick={(event) => {
				event.preventDefault();
				setActive(index);
			}}
		>
			{item.label}
		</Anchor>
	));
	return (
		<ManHeader height={'auto'} style={{ padding: '1rem' }}>
			<Group position='apart'>
				<Group className={classes.navLeftGroup}>
					<Title order={4} className={classes.navLogo}>
						BOOKSCART
					</Title>
					<Divider
						my={'auto'}
						orientation='vertical'
						size={'sm'}
						sx={{ height: '2rem' }}
					/>
					<TextInput
						className={classes.navSearchInput}
						placeholder='Search by Title, Author, Publisher or ISBN'
					/>
				</Group>
				<Group>
					<ActionIcon>
						<IconUserCircle size={'2rem'} />
					</ActionIcon>
					<ActionIcon>
						<IconShoppingCart />
					</ActionIcon>
					<ActionIcon>
						<IconHeart />
					</ActionIcon>
				</Group>
			</Group>
			<Group mt={'2rem'}>{mainItems}</Group>
		</ManHeader>
	);
};
