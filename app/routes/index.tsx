import React from 'react';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Image } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { Lists } from '~/components/Lists';
import { ListsResponse } from '~/types';

const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
export const loader = async () => {
	const res = await fetch(
		`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${process.env.NYT_API_KEY}`,
	);
	const data = await res.json();
	return json<ListsResponse>(data);
};

export default function Index() {
	const res = useLoaderData();
	const slides = images.map((image) => {
		return (
			<Carousel.Slide key={image}>
				<Image src={image} />
			</Carousel.Slide>
		);
	});

	return (
		<>
			<Image src='manga.jpg' style={{ marginBottom: '0.5rem' }} />
			<Carousel loop draggable withControls>
				{slides}
			</Carousel>
			<Lists lists={res.results.lists} />
		</>
	);
}
