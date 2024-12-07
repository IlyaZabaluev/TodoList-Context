import styles from './todo-list.module.css';
import { updateTaskAsync, deleteTaskAsync, ACTION_TYPE } from '../../actions';
import {
	selectorIsUpdating,
	selectorIsDeleting,
	selectorUpdateListFlag,
	selectorTasks,
} from '../../selectors';
import { useSelector, useDispatch } from 'react-redux';
import { setUpTask } from '../../utils';

export const TodoList = ({ id, title, isEditing }) => {
	const tasks = useSelector(selectorTasks);
	const updateListFlag = useSelector(selectorUpdateListFlag);
	const isUpdating = useSelector(selectorIsUpdating);
	const isDeleting = useSelector(selectorIsDeleting);
	const dispatch = useDispatch();

	const onTaskEdit = (id) => {
		dispatch({
			type: ACTION_TYPE.SET_TASKS,
			payload: setUpTask(tasks, { id, isEditing: true }),
		});
	};

	const newTitleChange = (id, newTitle) => {
		dispatch({
			type: ACTION_TYPE.SET_TASKS,
			payload: setUpTask(tasks, { id, title: newTitle }),
		});
	};

	const requestUpdateTask = () => {
		dispatch(updateTaskAsync(id, title, updateListFlag));
	};

	const requestDeleteTask = () => {
		dispatch(deleteTaskAsync(id, updateListFlag));
	};

	return (
		<div>
			<div className={styles.list}>
				{isEditing ? (
					<input
						type="text"
						value={title}
						onChange={({ target }) => newTitleChange(id, target.value)}
					/>
				) : (
					<div className={styles.task} onClick={() => onTaskEdit(id)}>
						{title}
					</div>
				)}

				<div className={styles.buttons}>
					{isEditing ? (
						<button
							disabled={isUpdating}
							className={styles.btn}
							onClick={() => requestUpdateTask(id)}
						>
							Сhange
						</button>
					) : (
						<button
							disabled={isDeleting}
							className={styles.btn}
							onClick={() => requestDeleteTask(id)}
						>
							Delete
						</button>
					)}
				</div>
			</div>
		</div>
	);
};
