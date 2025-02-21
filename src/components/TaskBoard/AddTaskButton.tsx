import { Plus } from 'lucide-react';
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

const AddTaskButton = () => {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="outline" className="cursor-pointer">
					<Plus />
					Add Task
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogTitle>Create Task</DialogTitle>
				<DialogDescription>
					Please fill in the form below to create a new task.
				</DialogDescription>
				<TaskForm onClose={() => setOpen(false)} />
			</DialogContent>
		</Dialog>
	);
};

export default AddTaskButton;
