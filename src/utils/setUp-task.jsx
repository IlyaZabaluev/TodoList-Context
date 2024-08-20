export const setUpTask = (comments, newTaskDate) =>
	comments.map((task) =>
		task.id === newTaskDate.id
			? {
					...task,
					...newTaskDate,
				}
			: task,
	);
