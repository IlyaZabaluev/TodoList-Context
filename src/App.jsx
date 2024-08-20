import styles from './App.module.css';
import { Todo, TodoList, TodoSortFiltr } from './components';
import { useContext } from 'react';
import { TodoContext } from './state-management';

export const App = () => {
	const { tasks, updateFilter, getSortTasks } = useContext(TodoContext);

	return (
		<div className={styles.app}>
			<Todo />
			<TodoSortFiltr updateFilter={updateFilter} getSortTasks={getSortTasks} />
			<div>
				{tasks.map(({ id, title, isEditing = false }) => (
					<TodoList key={id} id={id} title={title} isEditing={isEditing} />
				))}
			</div>
		</div>
	);
};
