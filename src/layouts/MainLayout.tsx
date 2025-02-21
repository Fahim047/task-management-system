import Navbar from '@/components/Navbar/Navbar';
import { useAuth } from '@/hooks';
import { Loader } from 'lucide-react';
import { Outlet } from 'react-router';

const MainLayout = () => {
	const { loading } = useAuth();
	if (loading)
		return (
			<div className="flex min-h-screen items-center justify-center">
				<Loader className="animate-spin" />
			</div>
		);
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default MainLayout;
