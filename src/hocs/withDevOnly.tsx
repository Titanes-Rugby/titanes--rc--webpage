import { ComponentType } from 'react';

const withDevOnly = <P extends object>(Component: ComponentType<P>) => {
	const WrappedComponent = (props: P) => {
		/* v8 ignore start */
		if (!import.meta.env.DEV) {
			return null;
		}
		/* v8 ignore stop */

		return <Component {...props} />;
	};

	WrappedComponent.displayName = `withDevOnly(${Component.displayName ?? Component.name ?? 'Component'})`;

	return WrappedComponent;
};

export default withDevOnly;
