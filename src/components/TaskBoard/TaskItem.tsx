import apiClient from '@/axios/apiClient';
import { formatDate } from '@/lib/date-utils';
import { TaskType } from '@/types';
import { Draggable } from '@hello-pangea/dnd';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TrashIcon } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '../ui';
import EditTaskButton from './EditTaskButton';

interface TaskItemProps {
	task: TaskType;
	index: number;
}
const TaskItem = ({ task, index }: TaskItemProps) => {
	const { title, description, category } = task;
	const queryClient = useQueryClient();

	const titleColor =
		category === 'To-Do'
			? 'text-blue-400'
			: category === 'In Progress'
			? 'text-yellow-400'
			: 'text-green-400';

	const deleteMutation = useMutation({
		mutationFn: async () => {
			await apiClient.delete(`/tasks/${task.id}`);
		},
		onSuccess: () => {
			toast.success('Task deleted successfully');
			queryClient.invalidateQueries({ queryKey: ['tasks'] });
		},
		onError: () => {
			toast.error("Couldn't delete task. Please try again.");
		},
	});

	const handleDelete = () => {
		const alertId = toast(
			<div className="w-full mr-0 text-center space-y-6">
				<p className="text-lg">Are you sure you want to delete?</p>
				<div className="flex justify-end items-center gap-2">
					<Button
						variant={'destructive'}
						size="sm"
						onClick={() => {
							toast.dismiss(alertId);
							deleteMutation.mutate();
						}}
					>
						Delete
					</Button>
					<Button size="sm" onClick={() => toast.dismiss()}>
						Cancel
					</Button>
				</div>
			</div>,
			{
				position: 'top-center',
			}
		);
	};

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
							<EditTaskButton task={task} />
							<Button
								onClick={handleDelete}
								className="text-white"
								variant="destructive"
								size="icon"
							>
								<TrashIcon />
							</Button>
						</div>
					</div>
					<p className="mb-2 text-sm text-zinc-200">{description}</p>
					<p className="mt-6 text-xs text-zinc-400">
						Created: {task.createdAt && formatDate(task.createdAt)}
					</p>
					<p className="mt-2 text-xs text-zinc-400">
						Last Updated: {task.updatedAt && formatDate(task.updatedAt)}
					</p>
				</div>
			)}
		</Draggable>
	);
};

export default TaskItem;
