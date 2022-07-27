import { Group, Title } from '@mantine/core';
import type { FC } from 'react';
import React from 'react';
import type { List as IList } from '~/types';
import { Image } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

export const List: FC<{ list: IList }> = ({ list }) => {
	const images = list.books.map((book) => (
		<Carousel.Slide key={book.title} size={'15%'} mr={'0.75rem'}>
			<Image src={book.book_image} />
		</Carousel.Slide>
	));
	return (
		<Group mt={'1rem'}>
			<Title order={5}>{list.display_name}</Title>
			<Carousel align={'start'} slidesToScroll={3}>
				{images}
			</Carousel>
		</Group>
	);
};
