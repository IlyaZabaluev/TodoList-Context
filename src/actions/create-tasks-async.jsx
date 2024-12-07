import { createTask } from '../api';
import { ACTION_TYPE } from '../actions';

export const createTasksAsync = (newTask, updateListFlag) => (dispatch) => {
	dispatch({ type: ACTION_TYPE.SET_UPDATE_LIST_FLAG, payload: !updateListFlag });
	dispatch({ type: ACTION_TYPE.IS_CREATING_START });

	return createTask(newTask)
		.then(() => {
			dispatch({
				type: ACTION_TYPE.ADD_TASKS,
				payload: newTask,
			});
		})
		.finally(() => dispatch({ type: ACTION_TYPE.IS_CREATING_END }));
};
