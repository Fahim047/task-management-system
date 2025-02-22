import { User } from 'firebase/auth';
import React from 'react';

export type TaskType = {
	id: number;
	title: string;
	description: string;
	category?: string;
	order?: string;
	createdAt?: string;
	updatedAt?: string;
};
export type AuthContextType = {
	user: User | null;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
	loading: boolean;
	handleSignInWithGoogle?: () => Promise<User | null>;
	handleLogout?: () => Promise<void>;
};
