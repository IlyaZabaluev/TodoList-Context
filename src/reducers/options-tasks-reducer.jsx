import { ACTION_TYPE } from '../actions';

const optionsTasksInitialState = {
	newTask: '',
	updateListFlag: false,
	filter: '',
};

export const optionsTasksReducer = (
	state = optionsTasksInitialState,
	{ type, payload },
) => {
	switch (type) {
		case ACTION_TYPE.SET_NEW_TASKS:
			return { ...state, ...payload };

		case ACTION_TYPE.SET_UPDATE_LIST_FLAG:
			return {
				...state,
				updateListFlag: payload,
			};

		case ACTION_TYPE.SET_FILTER:
			return { ...state, filter: payload };

		default:
			return state;
	}
};
