import { AuthContext } from '@/contexts';
import { AuthContextType } from '@/types';
import { useContext } from 'react';

const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};

export { useAuth };
