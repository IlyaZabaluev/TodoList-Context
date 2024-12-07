import { ACTION_TYPE } from '../actions';

const tasksInitialState = [];

export const tasksReducer = (state = tasksInitialState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.SET_TASKS:
			return payload;

		case ACTION_TYPE.ADD_TODO:
			return [payload, ...state];

		case ACTION_TYPE.DELETE_TASKS:
			return state.filter(({ id }) => id !== payload);

		case ACTION_TYPE.UPDATE_TASKS:
			return state.map((tasks) =>
				tasks.id === payload.id ? { ...tasks, ...payload } : tasks,
			);

		default:
			return state;
	}
};
