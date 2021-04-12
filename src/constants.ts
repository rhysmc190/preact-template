import Home from './routes/home';
import Login from './routes/login';
import Profile from './routes/profile';

export const ROUTES = [
	{ label: "Home", path: "/", component: Home, privileged: false },
	{ label: "Profile", path: "/profile", component: Profile, privileged: true },
	{ label: "Log In", path: "/login", component: Login, privileged: false },
];
