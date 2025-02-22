import apiClient from '@/axios/apiClient';
import { TaskType } from '@/types';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import AddTaskButton from './AddTaskButton';
import TaskCategory from './TaskCategory';

const TaskBoard = () => {
	const queryClient = useQueryClient();
	const {
		data: tasks,
		isPending,
		isError,
	} = useQuery({
		queryKey: ['tasks'],
		queryFn: async () => {
			const response = await apiClient.get('/tasks');
			return response.data;
		},
	});

	const updateTaskMutation = useMutation({
		mutationFn: async (updatedTask: TaskType) => {
			await apiClient.patch(`/tasks/${updatedTask.id}`, updatedTask);
		},
		onSuccess: () => {
			toast.success('Task updated');
			queryClient.invalidateQueries({ queryKey: ['tasks'] });
		},
	});
	const onDragEnd = (result: DropResult) => {
		if (!result.destination) return;

		const updatedTasks = tasks.map((task: TaskType) => {
			if (task.id.toString() === result.draggableId) {
				const updatedTask = {
					...task,
					category: result.destination?.droppableId,
				};
				updateTaskMutation.mutate(updatedTask);
				return updatedTask;
			}
			return task;
		});

		// Optimistic UI update
		queryClient.setQueryData(['tasks'], updatedTasks);
	};
	if (isPending) return <p>Loading...</p>;
	if (isError) return <p>Something went wrong...</p>;
	return (
		<section className="max-w-7xl mx-auto p-4">
			<div className="flex justify-between items-center gap-4 mb-4">
				<h4 className="text-lg md:text-2xl">Task Board</h4>
				<AddTaskButton />
			</div>
			<DragDropContext onDragEnd={onDragEnd}>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-start">
					<TaskCategory
						category="To-Do"
						tasks={tasks.filter((t: TaskType) => t.category === 'To-Do')}
					/>
					<TaskCategory
						category="In Progress"
						tasks={tasks.filter((t: TaskType) => t.category === 'In Progress')}
					/>
					<TaskCategory
						category="Done"
						tasks={tasks.filter((t: TaskType) => t.category === 'Done')}
					/>
				</div>
			</DragDropContext>
		</section>
	);
};

export default TaskBoard;
