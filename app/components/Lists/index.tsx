import type { FC } from 'react';
import React from 'react';
import type { List as IList } from '~/types';
import { List } from './List';

export const Lists: FC<{ lists: Array<IList> }> = ({ lists }) => {
	const listSections = lists.map((list) => (
		<List key={list.list_id} list={list} />
	));
	return <>{listSections}</>;
};
