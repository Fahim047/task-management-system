import { TaskType } from '@/types';
import { PenIcon } from 'lucide-react';
import { useState } from 'react';
import TaskForm from '../Forms/TaskForm';
import { Button } from '../ui';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
	DialogTrigger,
} from '../ui/dialog';
interface EditTaskButtonProps {
	task: TaskType;
}
const EditTaskButton = ({ task }: EditTaskButtonProps) => {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button className="text-white" size="icon">
					<PenIcon />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogTitle>Edit Task</DialogTitle>
				<DialogDescription>
					Please fill in the form below to edit the task.
				</DialogDescription>
				<TaskForm onClose={() => setOpen(false)} currentTask={task} />
			</DialogContent>
		</Dialog>
	);
};

export default EditTaskButton;
