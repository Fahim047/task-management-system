import { User } from 'firebase/auth';
import React from 'react';

export type TaskType = {
	id: number;
	title: string;
	description: string;
	category: string;
	createdAt?: Date;
	updatedAt?: Date;
};
export type AuthContextType = {
	user: User | null;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
	loading: boolean;
	handleSignInWithGoogle?: () => Promise<void>;
	handleLogout?: () => Promise<void>;
};
