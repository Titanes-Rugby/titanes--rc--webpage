import { useRouteError } from 'react-router-dom';

import { getRouteErrorMessage } from '../utils/getRouteErrorMessage';

const RouteErrorBoundary = () => {
	const error = useRouteError();
	const message = getRouteErrorMessage(error);

	return (
		<main className="flex min-h-screen items-center justify-center bg-white px-6">
			<div className="text-center">
				<p className="text-xs font-semibold uppercase tracking-[0.2em] text-titanes-500">
					{message.eyebrow}
				</p>
				<h1 className="mt-2 text-3xl font-semibold text-titanes-900">{message.title}</h1>
				{message.description ? (
					<p className="mt-3 text-sm text-titanes-700">{message.description}</p>
				) : null}
			</div>
		</main>
	);
};

export default RouteErrorBoundary;
