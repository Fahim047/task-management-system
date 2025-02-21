import { TaskType } from '@/types';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui';
import TaskCategory from './TaskCategory';

const initialTasks = [
	{
		title: 'test',
		id: 1,
		description: 'test test test',
		category: 'To-Do',
	},
	{
		title: 'test',
		id: 2,
		description: 'test test test',
		category: 'In Progress',
	},
	{
		title: 'test',
		id: 3,
		description: 'test test test',
		category: 'Done',
	},
];

const TaskBoard = () => {
	const [tasks, setTasks] = useState<TaskType[]>(initialTasks);

	const onDragEnd = (result: DropResult) => {
		if (!result.destination) return;
		const updatedTasks = tasks.map((task) => {
			if (task.id.toString() === result.draggableId) {
				return {
					...task,
					category: result?.destination?.droppableId as string,
				};
			}
			return task;
		});
		setTasks(updatedTasks);
	};

	return (
		<section className="max-w-7xl mx-auto p-4">
			<div className="flex justify-between items-center gap-4 mb-4">
				<h4 className="text-lg md:text-2xl">Task Board</h4>
				<Button variant="outline" className="cursor-pointer">
					<Plus />
					Add Task
				</Button>
			</div>
			<DragDropContext onDragEnd={onDragEnd}>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-start">
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
			</DragDropContext>
		</section>
	);
};

export default TaskBoard;
