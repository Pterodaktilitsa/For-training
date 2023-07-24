import { useState } from 'react';

export const useRequestDeleteHairDryer = (refreshProducts) => {
	const [isDeliting, setIsDeleting] = useState(false);
	const requestDeleteHairDryer = () => {
		setIsDeleting(true);
		fetch('http://localhost:3005/products/003', {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Фен удален, ответ сервера:', response);
				refreshProducts();
			})
			.finally(() => setIsDeleting(false));
	};
	return {
		isDeliting,
		requestDeleteHairDryer,
	};
};
