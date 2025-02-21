import { Plus } from 'lucide-react';
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
	return (
		<Dialog>
			<DialogTrigger>
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
				<TaskForm />
			</DialogContent>
		</Dialog>
	);
};

export default AddTaskButton;
