import { Button, Input, Textarea } from '../ui';
import { Label } from '../ui/label';

const TaskForm = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(e.currentTarget);
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className="mb-4">
				<Label htmlFor="title">Title</Label>
				<Input
					type="text"
					id="title"
					name="title"
					placeholder="Enter task title"
					required
				/>
			</div>
			<div className="mb-4">
				<Label htmlFor="description">Description</Label>
				<Textarea
					id="description"
					name="description"
					placeholder="Write a short description of the task"
					required
					className="resize-none h-20"
				/>
			</div>
			{/* <div className="mb-4">
					<Label htmlFor="category">Category</Label>
					<Select>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Select Category" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Category</SelectLabel>
								<SelectItem value="To-Do">To Do</SelectItem>
								<SelectItem value="In Progress">In Progress</SelectItem>
								<SelectItem value="Done">Done</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div> */}
			{/* <div className="mb-4">
					<Label htmlFor="deadline">Deadline</Label>
					<Input
						type="date"
						id="deadline"
						name="deadline"
						required
						className="w-full"
					/>
				</div> */}
			<div className="flex justify-end space-x-3">
				{/* <Button variant="outline">Cancel</Button> */}
				<Button type="submit">Create Task</Button>
			</div>
		</form>
	);
};

export default TaskForm;
