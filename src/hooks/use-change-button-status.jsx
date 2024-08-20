import { useState } from 'react';

export const useChangeButtonStatus = () => {
	const [status, setStatus] = useState({
		isCreating: false,
		isUpdating: false,
		isDeleting: false,
	});

	const setCreating = (isCreating) => {
		setStatus((prevStatus) => ({
			...prevStatus,
			isCreating,
		}));
	};

	const setUpdating = (isUpdating) => {
		setStatus((prevStatus) => ({
			...prevStatus,
			isUpdating,
		}));
	};

	const setDeleting = (isDeleting) => {
		setStatus((prevStatus) => ({
			...prevStatus,
			isDeleting,
		}));
	};

	return {
		setCreating,
		setUpdating,
		setDeleting,
		status,
	};
};
