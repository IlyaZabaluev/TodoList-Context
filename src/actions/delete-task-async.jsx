import { deleteTask } from '../api';
import { ACTION_TYPE } from '../actions';

export const deleteTaskAsync = (id, updateListFlag) => (dispatch) => {
	dispatch({ type: ACTION_TYPE.SET_UPDATE_LIST_FLAG, payload: !updateListFlag });
	dispatch({ type: ACTION_TYPE.IS_DELETING_START });

	deleteTask(id)
		.then(() => {
			dispatch({ type: ACTION_TYPE.DELETE_TASKS, payload: id });
		})
		.finally(() => dispatch({ type: ACTION_TYPE.IS_DELETING_END }));
};
