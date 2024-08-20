export const removeTask = (comments, taskId) =>
	comments.filter(({ id }) => id !== taskId);
