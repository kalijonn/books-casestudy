import type { MetaFunction } from '@remix-run/node';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';
import { AppShell, MantineProvider } from '@mantine/core';
import { StylesPlaceholder } from '@mantine/remix';
import { theme } from './theme';
import type { LinksFunction } from '@remix-run/react/dist/routeModules';
import { Header } from './components/Header';

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'Bookswagon',
	viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => {
	return [
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap',
		},
	];
};

export default function App() {
	return (
		<MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
			<html lang='en'>
				<head>
					<Meta />
					<Links />
					<StylesPlaceholder />
				</head>
				<body>
					<AppShell header={<Header />} fixed={false}>
						<Outlet />
					</AppShell>
					<ScrollRestoration />
					<Scripts />
					<LiveReload />
				</body>
			</html>
		</MantineProvider>
	);
}
