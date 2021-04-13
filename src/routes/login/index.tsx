import { FunctionalComponent, h } from "preact";
import { useCallback, useContext, useState } from "preact/hooks";
import { route } from "preact-router";

import GlobalContext from "../../context/GlobalContext";
import style from "./style.css";
import useForm from "../../hooks/useForm";

const Login: FunctionalComponent = () => {
	const { setGlobalContext } = useContext(GlobalContext);

	const username = "Username";
	const password = "Password";

	const [formValues, onChangeFormValue] = useForm([username, password]);

	const onSubmitForm = useCallback(
		(e: Event) => {
			e.preventDefault();
			setGlobalContext(prevState => ({
				...prevState,
				user: { username: formValues.get(username) as string, id: 1 },
				authorised: true,
			}));
			route("/profile");
		},
		[setGlobalContext]
	);

	return (
		<div class={style.login}>
			<form onSubmit={onSubmitForm}>
				<span>Login</span>
				<input
					type="text"
					name={username}
					placeholder={username}
					value={formValues.get(username)}
					onChange={onChangeFormValue}
				/>
				<input
					type="password"
					name={password}
					placeholder={password}
					value={formValues.get(password)}
					onChange={onChangeFormValue}
				/>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
