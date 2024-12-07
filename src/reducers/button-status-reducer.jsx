import { ACTION_TYPE } from '../actions';

const buttonStatusInitialState = {
	isCreating: false,
	isUpdating: false,
	isDeleting: false,
	isEditing: false,
};

export const buttonStatusReducer = (state = buttonStatusInitialState, { type }) => {
	switch (type) {
		case ACTION_TYPE.IS_CREATING_START:
			return { ...state, isCreating: true };

		case ACTION_TYPE.IS_CREATING_END:
			return { ...state, isCreating: false };

		case ACTION_TYPE.IS_UPDATING_START:
			return { ...state, isUpdating: true };

		case ACTION_TYPE.IS_UPDATING_END:
			return { ...state, isUpdating: false };

		case ACTION_TYPE.IS_DELETING_START:
			return { ...state, isDeleting: true };

		case ACTION_TYPE.IS_DELETING_END:
			return { ...state, isDeleting: false };

		case ACTION_TYPE.IS_EDITING_START:
			return { ...state, isEditing: true };

		case ACTION_TYPE.IS_EDITING_END:
			return { ...state, isEditing: false };

		default:
			return state;
	}
};
