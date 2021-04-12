import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import { useContext, useMemo } from 'preact/hooks';

import { ROUTES } from '../../constants';
import GlobalContext from '../../context/GlobalContext';
import { getAuthorisedRoutes } from '../../utils';
import style from './style.css';

const Header: FunctionalComponent = () => {
	const {
		globalContext: { authorised },
	} = useContext(GlobalContext);

	const links = useMemo(() => {
		const filteredRoutes = getAuthorisedRoutes(authorised);
		return filteredRoutes.map(({ path, label }) => (
			<Link activeClassName={style.active} href={path}>
				{label}
			</Link>
		));
	}, [authorised]);

	return (
		<header class={style.header}>
			<h1>Preact App</h1>
			<nav>{links}</nav>
		</header>
	);
};

export default Header;
