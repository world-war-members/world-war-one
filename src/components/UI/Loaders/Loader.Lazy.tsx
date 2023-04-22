import React from "react";

import Loader from "./Loader.Application";

const LazyLoader = (Component: React.LazyExoticComponent<any>): React.ReactNode => {
	return (
		<React.Suspense fallback={<Loader />}>
			<Component />
		</React.Suspense>
	);
};

export default LazyLoader;