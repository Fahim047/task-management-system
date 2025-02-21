import Navbar from './components/Navbar/Navbar';
import TaskBoard from './components/TaskBoard/TaskBoard';
const App = () => {
	return (
		<div className="w-full min-h-screen bg-white/80">
			<Navbar />
			<TaskBoard />
		</div>
	);
};

export default App;
