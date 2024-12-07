import styles from './App.module.css';
import { Todo, TodoList, TodoSortFiltr } from './components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorUpdateListFlag, selectorTasks, selectorFilter } from './selectors';
import { readTaskAsync } from './actions';

export const App = () => {
	const updateListFlag = useSelector(selectorUpdateListFlag);
	const tasks = useSelector(selectorTasks);
	const filter = useSelector(selectorFilter);
	const dispatch = useDispatch();

	const filteredTasks = tasks.filter((task) => {
		return task.title.toString().toLowerCase().includes(filter.toLowerCase());
	});

	useEffect(() => {
		dispatch(readTaskAsync());
	}, [updateListFlag]);

	return (
		<div className={styles.app}>
			<Todo />
			<TodoSortFiltr />
			<div>
				{filteredTasks.map(({ id, title, isEditing = false }) => (
					<TodoList key={id} id={id} title={title} isEditing={isEditing} />
				))}
			</div>
		</div>
	);
};
