import { updateTask } from '../api';
import { ACTION_TYPE } from '../actions';

export const updateTaskAsync = (id, title, updateListFlag) => (dispatch) => {
	dispatch({ type: ACTION_TYPE.SET_UPDATE_LIST_FLAG, payload: !updateListFlag });
	dispatch({ type: ACTION_TYPE.IS_UPDATING_START });

	return updateTask(id, title)
		.then(() => {
			dispatch({ type: ACTION_TYPE.UPDATE_TASKS, payload: id, title });
		})
		.finally(() => dispatch({ type: ACTION_TYPE.IS_DELETING_END }));
};
