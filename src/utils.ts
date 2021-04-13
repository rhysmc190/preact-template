import { ROUTES } from "./constants";

export function getAuthorisedRoutes(auth: boolean) {
	// if user is authorised they can access all routes (some are hidden, eg login),
	// otherwise they can only access non-privileged routes
	return auth
		? ROUTES.filter(route => route.showWhenAuthorised)
		: ROUTES.filter(route => !route.privileged);
}
