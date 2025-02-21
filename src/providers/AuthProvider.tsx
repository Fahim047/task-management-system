import {
	onAuthStateChanged,
	signInWithPopup,
	signOut,
	User,
} from 'firebase/auth';
import { ReactNode, useEffect, useMemo, useState } from 'react';

import { AuthContext } from '@/contexts';
import { AuthContextType } from '@/types';
import auth, { googleProvider } from '../firebase/firebase.config';

const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	const handleSignInWithGoogle = async (): Promise<void> => {
		try {
			const result = await signInWithPopup(auth, googleProvider);
			setUser(result.user);
		} catch (error) {
			console.error('Google Sign-In Error:', error);
		}
	};

	const handleLogout = async (): Promise<void> => {
		try {
			await signOut(auth);
			setUser(null);
		} catch (error) {
			console.error('Sign Out Error:', error);
		}
	};

	const authInfo: AuthContextType = useMemo(
		() => ({
			user,
			setUser,
			loading,
			handleSignInWithGoogle,
			handleLogout,
		}),
		[user, loading]
	);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
