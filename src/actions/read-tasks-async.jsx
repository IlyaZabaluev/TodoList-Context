import { readTask } from '../api';
import { ACTION_TYPE } from '../actions';

export const readTaskAsync = () => (dispatch) => {
	return readTask().then((loadedComments) => {
		dispatch({ type: ACTION_TYPE.SET_TASKS, payload: loadedComments });
	});
};
