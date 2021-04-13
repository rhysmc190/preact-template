import { FunctionalComponent, h } from "preact";
import { route } from "preact-router";
import { useContext, useEffect } from "preact/hooks";

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
