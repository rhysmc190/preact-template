import Home from "./routes/home";
import Login from "./routes/login";
import Logout from "./routes/logout";
import Profile from "./routes/profile";

export const ROUTES = [
	{ label: "Home", path: "/", component: Home, privileged: false },
	{ label: "Profile", path: "/profile", component: Profile, privileged: true },
	{ label: "Login", path: "/login", component: Login, privileged: false },
	{ label: "Logout", path: "/logout", component: Logout, privileged: true },
];
