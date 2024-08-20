export const readTask = () => {
	return fetch('http://localhost:3005/tasks').then((loadedData) => loadedData.json());
};

export const createTask = (newTask) => {
	return fetch('http://localhost:3005/tasks', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			title: newTask,
		}),
	}).then((rawResponse) => rawResponse.json());
};

export const updateTask = (id, title) => {
	return fetch(`http://localhost:3005/tasks/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			title: title,
		}),
	}).then((rawResponse) => rawResponse.json());
};

export const deleteTask = (id) => {
	return fetch(`http://localhost:3005/tasks/${id}`, {
		method: 'DELETE',
	}).then((rawResponse) => rawResponse.json());
};
