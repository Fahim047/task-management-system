import { useAuth } from '@/hooks';
import { Link, useNavigate } from 'react-router';
import { Button, Input } from '../ui';

const Navbar = () => {
	const { user, handleLogout } = useAuth();
	const navigate = useNavigate();
	const handleSignOut = async (): Promise<void> => {
		try {
			if (handleLogout) {
				await handleLogout();
				navigate('/login');
			} else {
				throw new Error('handleLogout is not defined');
			}
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<nav className="max-w-7xl mx-auto p-4">
			<div className="flex justify-between items-center gap-6">
				<Link
					to="/"
					className="text-xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text"
				>
					Taskify
				</Link>

				<Input className="max-w-1/2" placeholder="Search..." />
				{user ? (
					<div className="flex items-center gap-2">
						<img
							className="size-10 rounded-full"
							src={user.photoURL || ''}
							alt={user?.displayName || ''}
							referrerPolicy="no-referrer"
						/>
						<Button
							onClick={handleSignOut}
							variant="destructive"
							size="lg"
							className="cursor-pointer hover:opacity-90"
						>
							Logout
						</Button>
					</div>
				) : (
					<Button
						asChild
						size="lg"
						className="bg-gradient-to-r from-green-400 to-green-600 cursor-pointer hover:opacity-80"
					>
						<Link to="/login">Login</Link>
					</Button>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
