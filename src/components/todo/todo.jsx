import styles from './todo.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectorIsCreating,
	selectorNewTask,
	selectorUpdateListFlag,
} from '../../selectors';
import { ACTION_TYPE, createTasksAsync } from '../../actions';

export const Todo = () => {
	const newTask = useSelector(selectorNewTask);
	const updateListFlag = useSelector(selectorUpdateListFlag);
	const isCreating = useSelector(selectorIsCreating);
	const dispatch = useDispatch();

	const entryTasks = (e) => {
		dispatch({
			type: ACTION_TYPE.SET_NEW_TASKS,
			payload: { newTask: e.target.value },
		});
	};

	const requestAddTask = () => {
		dispatch(createTasksAsync(newTask, updateListFlag));
	};

	return (
		<div>
			<div className={styles.title}>
				<h1>Task list :</h1>
			</div>
			<div className={styles.formInput}>
				<input
					placeholder="Enter task..."
					value={newTask}
					onChange={entryTasks}
					className={styles.formNewTask}
					type="text"
				/>
				<button
					disabled={isCreating}
					className={styles.btnForm}
					onClick={requestAddTask}
				>
					Add Task
				</button>
			</div>
		</div>
	);
};
