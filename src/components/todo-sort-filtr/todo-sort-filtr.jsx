import { selectorTasks, selectorFilter } from '../../selectors';
import { ACTION_TYPE } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import styles from './todo-sort-filtr.module.css';

export const TodoSortFiltr = () => {
	const filter = useSelector(selectorFilter);
	const tasks = useSelector(selectorTasks);
	const dispatch = useDispatch();

	const updateFilter = (value) => {
		dispatch({ type: ACTION_TYPE.SET_FILTER, payload: value });
	};

	const getSortTasks = () => {
		const sorted = [...tasks].sort((a, b) => {
			if (a['title'] < b['title']) return -1;
		});
		dispatch({ type: ACTION_TYPE.SET_TASKS, payload: sorted });
	};

	return (
		<div className={styles.inputSort}>
			<input
				placeholder="Search task..."
				className={styles.formNewTask}
				type="text"
				onChange={(e) => updateFilter(e.target.value)}
			/>
			<button className={styles.btnForm} onClick={getSortTasks}>
				Sort
			</button>
		</div>
	);
};
