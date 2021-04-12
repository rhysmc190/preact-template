import { FunctionalComponent, h } from "preact";
import { useContext, useEffect } from "preact/hooks";
import { route } from "preact-router";

import GlobalContext, { defaultUser } from "../../context/GlobalContext";

const Logout: FunctionalComponent = () => {
	const { setGlobalContext } = useContext(GlobalContext);

	useEffect(() => {
		setGlobalContext(prevState => ({ ...prevState, user: defaultUser, authorised: false }));
		route("/");
	}, []);

	return null;
};

export default Logout;
