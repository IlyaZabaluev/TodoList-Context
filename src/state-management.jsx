import { createContext, useState, useEffect } from 'react';
import { readTask, createTask, updateTask, deleteTask } from './api';
import { useChangeButtonStatus, useTasks } from './hooks';
import { findTask, setUpTask, removeTask } from './utils';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
	const [updateListFlag, setUpdateListFlag] = useState(false);
	const [comments, setComments] = useState([]);
	const [newTask, setNewTask] = useState('');
	const { tasks, updateFilter, getSortTasks } = useTasks(comments, setComments);
	const { setCreating, setUpdating, setDeleting } = useChangeButtonStatus();

	const onTaskEdit = (id) => {
		setComments(setUpTask(comments, { id, isEditing: true }));
	};

	const newTitleChange = (id, newTitle) => {
		setComments(setUpTask(comments, { id, title: newTitle }));
	};

	useEffect(() => {
		readTask().then((loadedComments) => {
			setComments(loadedComments.reverse());
		});
	}, [updateListFlag]);

	const requestAddTask = () => {
		setCreating(true);
		setNewTask('');
		createTask(newTask).then(() => {
			setUpdateListFlag(!updateListFlag);
			setCreating(false);
		});
	};

	const requestUpdateTask = (id) => {
		setUpdating(true);
		const { title } = findTask(comments, id) || {};
		updateTask(id, title).then(() => {
			setComments(setUpTask(comments, id));
			setUpdateListFlag(!updateListFlag);
			setUpdating(false);
		});
	};

	const requestDeleteTask = (id) => {
		setDeleting(true);
		deleteTask(id).then(() => {
			setComments(removeTask(comments, id));
			setUpdateListFlag(!updateListFlag);
			setDeleting(false);
		});
	};

	return (
		<TodoContext.Provider
			value={{
				newTask,
				setNewTask,
				tasks,
				getSortTasks,
				updateFilter,
				onTaskEdit,
				newTitleChange,
				requestAddTask,
				requestUpdateTask,
				requestDeleteTask,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};
