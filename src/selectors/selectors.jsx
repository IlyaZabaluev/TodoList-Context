export const selectorTasks = ({ tasks }) => tasks;

export const selectorNewTask = ({ optionsTasks }) => optionsTasks.newTask;

export const selectorUpdateListFlag = ({ optionsTasks }) => optionsTasks.updateListFlag;

export const selectorFilter = ({ optionsTasks }) => optionsTasks.filter;

export const selectorIsCreating = ({ buttonStatus }) => buttonStatus.isCreating;

export const selectorIsUpdating = ({ buttonStatus }) => buttonStatus.isUpdating;

export const selectorIsDeleting = ({ buttonStatus }) => buttonStatus.isDeleting;

export const selectorIsEditing = ({ buttonStatus }) => buttonStatus.isEditing;
