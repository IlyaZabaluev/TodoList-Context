import styles from './todo-list.module.css';
import { useChangeButtonStatus } from '../../hooks';
import { useContext } from 'react';
import { TodoContext } from '../../state-management';

export const TodoList = ({ id, title, isEditing }) => {
	const { status } = useChangeButtonStatus();
	const { requestUpdateTask, requestDeleteTask, onTaskEdit, newTitleChange } =
		useContext(TodoContext);

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
							disabled={status.isUpdating}
							className={styles.btn}
							onClick={() => requestUpdateTask(id)}
						>
							Сhange
						</button>
					) : (
						<button
							disabled={status.isDeleting}
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
