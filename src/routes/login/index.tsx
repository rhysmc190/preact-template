import { FunctionalComponent, h } from 'preact';
import { useCallback, useContext, useState } from 'preact/hooks';

import GlobalContext from '../../context/GlobalContext';
import style from './style.css';

const Login: FunctionalComponent = () => {
	const { setGlobalContext } = useContext(GlobalContext);

	const [user, setUser] = useState({ username: "frank", id: 1 });

	const onClickLogin = useCallback(
		() => setGlobalContext(prevState => ({ ...prevState, user, authorised: true })),
		[setGlobalContext]
	);

	return (
		<div class={style.login}>
			<h1>Login</h1>
			<button onClick={onClickLogin}>Login</button>
		</div>
	);
};

export default Login;
