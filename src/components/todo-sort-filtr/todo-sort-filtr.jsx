import styles from './todo-sort-filtr.module.css';

export const TodoSortFiltr = ({ updateFilter, getSortTasks }) => {
	return (
		<div className={styles.inputSort}>
			<input
				placeholder="Task search..."
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
