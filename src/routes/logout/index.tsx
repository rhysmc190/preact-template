import { FunctionalComponent, h } from 'preact';
import { useContext, useEffect } from 'preact/hooks';

import GlobalContext, { defaultUser } from '../../context/GlobalContext';

const Logout: FunctionalComponent = () => {
	const { setGlobalContext } = useContext(GlobalContext);

	useEffect(() => {
		setGlobalContext(prevState => ({ ...prevState, user: defaultUser, authorised: false }));
	}, []);

	return <div>thing</div>;
};

export default Logout;
