import { isRouteErrorResponse } from 'react-router-dom';

export const getRouteErrorMessage = (error: unknown) => {
	if (isRouteErrorResponse(error)) {
		return {
			eyebrow: `Error ${error.status}`,
			title: 'No se pudo cargar la pagina',
			description: error.statusText,
		};
	}

	return {
		eyebrow: 'Error inesperado',
		title: 'Algo salio mal al cargar la pagina',
		description: '',
	};
};
