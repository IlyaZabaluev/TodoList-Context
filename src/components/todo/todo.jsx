import styles from './todo.module.css';
import { useChangeButtonStatus } from '../../hooks';
import { useContext } from 'react';
import { TodoContext } from '../../state-management';

export const Todo = () => {
	const { status } = useChangeButtonStatus();
	const { newTask, setNewTask, requestAddTask } = useContext(TodoContext);

	return (
		<div>
			<div className={styles.title}>
				<h1>Task list :</h1>
			</div>
			<div className={styles.formInput}>
				<input
					placeholder="Enter tasks..."
					value={newTask}
					onChange={(e) => setNewTask(e.target.value)}
					className={styles.formNewTask}
					type="text"
				/>
				<button
					disabled={status.isCreating}
					className={styles.btnForm}
					onClick={requestAddTask}
				>
					Add Task
				</button>
			</div>
		</div>
	);
};
