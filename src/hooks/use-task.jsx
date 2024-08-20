import { useState } from 'react';

export const useTasks = (comments, setComments) => {
	const [filter, setFilter] = useState('');

	const filteredTasks = comments.filter((task) => {
		return task.title.toString().toLowerCase().includes(filter.toLowerCase());
	});

	const updateFilter = (value) => {
		setFilter(value);
	};

	const getSortTasks = () => {
		const sorted = [...comments].sort((a, b) => {
			if (a['title'] < b['title']) return -1;
		});
		setComments(sorted);
	};

	return {
		tasks: filteredTasks,
		updateFilter,
		getSortTasks,
	};
};
