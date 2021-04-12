import { createContext } from 'preact';
import { StateUpdater } from 'preact/hooks';

import { User } from '../types';

interface GlobalContextState {
	user: User;
	authorised: boolean;
}

const defaultSetGlobalContext: StateUpdater<GlobalContextState> = () => null;

export const defaultUser: User = { username: "", id: 0 };

export const defaultGlobalContext: GlobalContextState = {
	user: { username: "", id: 0 },
	authorised: false,
};

const GlobalContext = createContext({
	globalContext: defaultGlobalContext,
	setGlobalContext: defaultSetGlobalContext,
});

export default GlobalContext;
