import React from 'react';
import { Tag } from '../../types/Tag';

interface Props {
	tags: Tag[];
}

const TagList = ({ tags }: Props) => {
	return (
		<div className={'box-border px-16'}>
			{tags.map((tag) => (
				<div key={tag.name} className={`badge badge-${tag.color} mr-1`}>
					{tag.name}
				</div>
			))}
		</div>
	);
};

export default TagList;