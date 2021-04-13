import { ROUTES } from "./constants";
import { User } from "./types";

export function getAuthorisedRoutes(auth: boolean) {
	// if user is authorised they can access all routes (some are hidden, eg login),
	// otherwise they can only access non-privileged routes
	return auth
		? ROUTES.filter(route => route.showWhenAuthorised)
		: ROUTES.filter(route => !route.privileged);
}

export function authenticateUser(username: string, password: string): User | undefined {
	// here we'll make some sort of API request for user auth
	return { username, id: 1 };
}
