import { TaskType } from '@/types';
import { SortAsc } from 'lucide-react';
import TaskItem from './TaskItem';

interface TaskCategoryProps {
	tasks: Array<TaskType>;
	category: string;
}
const TaskCategory = ({ tasks, category }: TaskCategoryProps) => {
	const bgColor =
		category === 'To-Do'
			? 'bg-blue-400'
			: category === 'In Progress'
			? 'bg-yellow-500'
			: 'bg-green-400';
	return (
		<div className={`p-3 ${bgColor} rounded-lg`}>
			<div className="flex justify-between items-center mb-2 text-white">
				<h4>Task Category</h4>
				<SortAsc />
			</div>
			<ul className="flex flex-col gap-2">
				{tasks.map((task) => (
					<TaskItem key={task.id} task={task} />
				))}
			</ul>
		</div>
	);
};

export default TaskCategory;
