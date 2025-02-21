import { BellDot } from 'lucide-react';
import { Input } from '../ui';

const Navbar = () => {
	return (
		<nav className="max-w-7xl mx-auto p-4">
			<div className="flex justify-between items-center gap-6">
				<h3 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
					Taskify
				</h3>

				<Input className="max-w-1/2" placeholder="Search..." />
				<BellDot />
			</div>
		</nav>
	);
};

export default Navbar;
