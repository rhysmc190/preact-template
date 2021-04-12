import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';
import { useMemo, useState } from 'preact/hooks';

import GlobalContext, { defaultGlobalContext } from '../context/GlobalContext';
import NotFoundPage from '../routes/notfound';
import { getAuthorisedRoutes } from '../utils';
import Header from './header';

const App: FunctionalComponent = () => {
	const [globalContext, setGlobalContext] = useState(defaultGlobalContext);

	const { authorised } = globalContext;

	const routes = useMemo(() => {
		const filteredRoutes = getAuthorisedRoutes(authorised);
		return filteredRoutes.map(({ path, component }) => (
			<Route path={path} component={component} />
		));
	}, [authorised]);

	return (
		<GlobalContext.Provider value={{ globalContext, setGlobalContext }}>
			<div id="app">
				<Header />
				<Router>
					{routes}
					<NotFoundPage default />
				</Router>
			</div>
		</GlobalContext.Provider>
	);
};

export default App;
