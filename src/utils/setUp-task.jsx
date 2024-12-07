export const setUpTask = (tasks, newTaskDate) =>
	tasks.map((task) =>
		task.id === newTaskDate.id
			? {
					...task,
					...newTaskDate,
				}
			: task,
	);
