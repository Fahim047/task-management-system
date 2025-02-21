import { TaskType } from '@/types';
import { Draggable } from '@hello-pangea/dnd';
import { PenIcon, TrashIcon } from 'lucide-react';
import { Button } from '../ui';

interface TaskItemProps {
	task: TaskType;
	index: number;
}
const TaskItem = ({ task, index }: TaskItemProps) => {
	const { title, description, category } = task;
	const titleColor =
		category === 'To-Do'
			? 'text-blue-400'
			: category === 'In Progress'
			? 'text-yellow-400'
			: 'text-green-400';

	return (
		<Draggable draggableId={task.id.toString()} index={index}>
			{(provided) => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					className="rounded-lg bg-gray-800 p-4"
				>
					<div className="flex justify-between">
						<h4 className={`mb-2 flex-1 font-semibold ${titleColor}`}>
							{title}
						</h4>
						<div className="flex gap-2">
							<Button className="text-white" size="icon">
								<PenIcon />
							</Button>
							<Button className="text-white" variant="destructive" size="icon">
								<TrashIcon />
							</Button>
						</div>
					</div>
					<p className="mb-2 text-sm text-zinc-200">{description}</p>
					<p className="mt-6 text-xs text-zinc-400">
						{new Date().toDateString()}
					</p>
				</div>
			)}
		</Draggable>
	);
};

export default TaskItem;
