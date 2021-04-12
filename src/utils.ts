import { ROUTES } from './constants';

export function getAuthorisedRoutes(auth: boolean) {
	// if user is authorised they can access all routes,
	// otherwise they can only access non-privileged routes
	return auth ? ROUTES : ROUTES.filter(route => !route.privileged);
}
