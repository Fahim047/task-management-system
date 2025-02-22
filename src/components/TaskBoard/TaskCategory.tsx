import { TaskType } from '@/types';
import { Droppable } from '@hello-pangea/dnd';
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
			? 'bg-yellow-400'
			: 'bg-green-400';

	return (
		<Droppable droppableId={category}>
			{(provided) => (
				<div
					ref={provided.innerRef}
					{...provided.droppableProps}
					className={`p-3 ${bgColor} rounded-lg flex flex-col`}
				>
					<div className="flex justify-between items-center mb-2 text-white">
						<h4 className="text-xl">{`${category}(${tasks.length})`}</h4>
						{/* <SortAsc /> */}
					</div>
					<ul className="flex flex-col gap-2 flex-grow">
						{tasks.length > 0 ? (
							tasks.map((task, index) => (
								<TaskItem key={task.id} task={task} index={index} />
							))
						) : (
							<div className="flex items-center justify-center min-h-[100px]">
								<p className="text-white font-medium text-center py-4">
									No Tasks Here
								</p>
							</div>
						)}
						{provided.placeholder}
					</ul>
				</div>
			)}
		</Droppable>
	);
};

export default TaskCategory;
