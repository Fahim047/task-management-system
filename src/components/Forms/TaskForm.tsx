import apiClient from '@/axios/apiClient';
import { TaskType } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button, Input, Textarea } from '../ui';
import { Label } from '../ui/label';

interface TaskFormProps {
	onClose: () => void;
	currentTask?: TaskType;
}

const TaskForm = ({ onClose, currentTask }: TaskFormProps) => {
	const isEdit = Boolean(currentTask);
	const [title, setTitle] = useState(isEdit ? currentTask!.title : '');
	const [description, setDescription] = useState(
		isEdit ? currentTask!.description : ''
	);

	const queryClient = useQueryClient();

	const { mutate, isPending } = useMutation({
		mutationFn: async () => {
			if (isEdit) {
				return await apiClient.patch(`/tasks/${currentTask!.id}`, {
					title,
					description,
				});
			} else {
				return await apiClient.post('/tasks', { title, description });
			}
		},
		onSuccess: () => {
			toast.success(isEdit ? 'Task updated successfully' : 'New task added');
			queryClient.invalidateQueries({ queryKey: ['tasks'] });
			onClose();
		},
		onError: () => {
			toast.error("Couldn't save task. Please try again.");
		},
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		mutate();
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="mb-4">
				<Label htmlFor="title">Title</Label>
				<Input
					type="text"
					id="title"
					name="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="Enter task title"
					required
				/>
			</div>
			<div className="mb-4">
				<Label htmlFor="description">Description</Label>
				<Textarea
					id="description"
					name="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder="Write a short description of the task"
					required
					className="resize-none h-20"
				/>
			</div>
			<div className="flex justify-end space-x-3">
				<Button type="button" variant="outline" onClick={onClose}>
					Cancel
				</Button>
				<Button type="submit" disabled={isPending}>
					{isPending ? 'Saving...' : isEdit ? 'Update Task' : 'Create Task'}
				</Button>
			</div>
		</form>
	);
};

export default TaskForm;
