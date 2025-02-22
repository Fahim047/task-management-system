import Navbar from '@/components/Navbar/Navbar';
import { Toaster } from '@/components/ui/sonner';
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
			<footer className="p-4">
				<p className="text-center">
					Made with ❤️ by{' '}
					<span className="font-bold text-green-400 hover:underline">
						Fahimul Islam
					</span>
				</p>
			</footer>
			<Toaster richColors position="top-right" />
		</>
	);
};

export default MainLayout;
