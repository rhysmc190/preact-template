import { FunctionalComponent, h } from "preact";
import { useCallback, useContext } from "preact/hooks";
import { route } from "preact-router";

import GlobalContext from "../../context/GlobalContext";
import style from "./style.css";
import useForm from "../../hooks/useForm";
import { authenticateUser } from "../../utils";

const Login: FunctionalComponent = () => {
	const { setGlobalContext } = useContext(GlobalContext);

	// form fields (formatted so they can be directly used as a placeholder)
	const username = "Username";
	const password = "Password";

	const [formValues, onChangeFormValue] = useForm([username, password]);

	const onSubmitForm = useCallback(
		(e: Event) => {
			e.preventDefault();
			// validate user input

			// if valid, authenticate user with server
			const user = authenticateUser(
				formValues.get(username) as string,
				formValues.get(password) as string
			);
			if (!user) {
				// user auth failure, show errors
				console.error("bahhhhhhhhhhhhhhhhhhh");
				return;
			}
			// user auth success
			setGlobalContext(prevState => ({ ...prevState, user, authorised: true }));
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
