import type { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
	headings: {
		fontFamily: '"Open Sans", sans-serif',
		sizes: {
			h1: { fontSize: '5rem', fontWeight: 700, lineHeight: 'inherit' },
			h2: { fontSize: '4rem', fontWeight: 700, lineHeight: 'inherit' },
			h3: { fontSize: '3rem', fontWeight: 700, lineHeight: 'inherit' },
			h4: { fontSize: '2rem', fontWeight: 700, lineHeight: 'inherit' },
			h5: { fontSize: '1rem', fontWeight: 700, lineHeight: 'inherit' },
			h6: { fontSize: '0.5rem', fontWeight: 700, lineHeight: 'inherit' },
		},
	},
};
