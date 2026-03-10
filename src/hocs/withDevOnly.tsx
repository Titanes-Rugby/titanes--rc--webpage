import { ComponentType } from 'react';

const withDevOnly = <P extends object>(Component: ComponentType<P>) => {
	const WrappedComponent = (props: P) => {
		if (!import.meta.env.DEV) {
			return null;
		}

		return <Component {...props} />;
	};

	WrappedComponent.displayName = `withDevOnly(${Component.displayName ?? Component.name ?? 'Component'})`;

	return WrappedComponent;
};

export default withDevOnly;
