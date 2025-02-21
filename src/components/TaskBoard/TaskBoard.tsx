import { Plus } from 'lucide-react';
import { Button } from '../ui';
import TaskCategory from './TaskCategory';
const tasks = [
	{
		title: 'test',
		id: 1,
		description: 'test test test',
		category: 'To-Do',
	},
	{
		title: 'test',
		id: 1,
		description: 'test test test',
		category: 'In Progress',
	},
	{
		title: 'test',
		id: 2,
		description: 'test test test',
		category: 'Done',
	},
];
const TaskBoard = () => {
	return (
		<section className="max-w-7xl mx-auto p-4">
			<div className="flex justify-between items-center gap-4 mb-4">
				<h4 className="text-lg md:text-2xl">Task Board</h4>
				<Button>
					<Plus />
					Add Task
				</Button>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
				<TaskCategory
					category="To-Do"
					tasks={tasks.filter((t) => t.category === 'To-Do')}
				/>
				<TaskCategory
					category="In Progress"
					tasks={tasks.filter((t) => t.category === 'In Progress')}
				/>
				<TaskCategory
					category="Done"
					tasks={tasks.filter((t) => t.category === 'Done')}
				/>
			</div>
		</section>
	);
};

export default TaskBoard;
