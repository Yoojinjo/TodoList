import { useState, useEffect } from "react";
import { useReducer } from "react";
import "./App.css";
import { v4 as uniqueID } from "uuid"; // import UUID library for unique ids

import AddTask from "./AddTask";
import List from "./List";

const initialTasks = [
	{
		id: uniqueID(),
		text: "A heading labeling it as a todo list.",
	},
	{
		id: uniqueID(),
		text: "A list of items, which are strings listing activities to be accomplished",
	},
	{
		id: uniqueID(),
		text: "A checkbox next to it which indicates whether it is complete.",
	},
	{
		id: uniqueID(),
		text: "A delete button next to it which removes it from the list",
	},
	{
		id: uniqueID(),
		text: "Checkbox enables the delete button and hides the edit button",
	},
	{
		id: uniqueID(),
		text: "An edit button that replaces the todo string with a text input used to edit the todo",
	},
	{
		id: uniqueID(),
		text: "When this text input is active, the delete and edit buttons should be hidden, and a save button should appear",
	},
	{
		id: uniqueID(),
		text: "The save button should save any changes made to the todo within the text input",
	},
	{
		id: uniqueID(),
		text: "An input element that creates new todo items and adds them to the list",
	},
	{
		id: uniqueID(),
		text: "New todos should be added to the top of the list visually; the oldest todos should be at the bottom",
	},
];

function App() {
	const [tasks, setTasks] = useState([]);

	// Populate tasks one time
	useEffect(() => {
		setTasks(initialTasks); // Set the initial tasks
	}, []);

	const addTask = (task) => {
		const newTask = { id: uniqueID(), text: task }; //add a unique ID
		setTasks([newTask, ...tasks]);
	};

	// Delete task filter method creates new array  taking out task with id property
	const handleDelete = (taskID) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskID));
	};

	// change state of tasks after edit a task
	const handleUpdate = (taskID, newText) => {
		setTasks(
			(prevTasks) =>
				prevTasks.map((task) =>
					task.id === taskID ? { ...task, text: newText } : task
				) // spread operator of task, then if current task ID matches  ID of task that needs to be edited, then override text with newText. If not match return task(no change)
		);
	};

	return (
		<>
			<h1>React ToDo List</h1>

			<div className="Tasks">
				<List
					tasks={tasks}
					handleDelete={handleDelete}
					handleUpdate={handleUpdate}
				/>
			</div>
			<AddTask addTask={addTask} />
		</>
	);
}

export default App;
