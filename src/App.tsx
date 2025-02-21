import { Navigate } from 'react-router';
import TaskBoard from './components/TaskBoard/TaskBoard';
import { useAuth } from './hooks';
const App = () => {
	const { user } = useAuth();
	if (!user) return <Navigate to="/login" />;
	return (
		<div className="w-full min-h-screen bg-white/80">
			<TaskBoard />
		</div>
	);
};

export default App;
