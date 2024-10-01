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

//Reducer function for practice
// Define the reducer function
const taskReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TASK":
			return [{ id: uniqueID(), text: action.payload }, ...state]; // add new task
		case "DELETE_TASK":
			return state.filter((task) => task.id !== action.payload); // delete task by ID
		case "UPDATE_TASK":
			return state.map((task) =>
				task.id === action.payload.id
					? { ...task, text: action.payload.text }
					: task
			); // update text
		default:
			return state; // Return current state if action is not recognized
	}
};

function App() {
	// const [tasks, setTasks] = useState([]);
	const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

	// Populate tasks one time
	// useEffect(() => {
	// 	setTasks(initialTasks); // Set the initial tasks
	// }, []);

	const addTask = (task) => {
		dispatch({ type: "ADD_TASK", payload: task }); // Dispatch action to add task
		// old setState code
		// const newTask = { id: uniqueID(), text: task }; //add a unique ID
		// setTasks([newTask, ...tasks]);
	};

	// Delete task filter method creates new array  taking out task with id property
	const handleDelete = (taskID) => {
		dispatch({ type: "DELETE_TASK", payload: taskID });
		// old setState code
		// setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskID));
	};

	const handleUpdate = (taskID, newText) => {
		dispatch({
			type: "UPDATE_TASK",
			payload: { id: taskID, text: newText },
		}); // Dispatch action to update task
	};

	// old setState code
	// // change state of tasks after edit a task
	// const handleUpdate = (taskID, newText) => {
	// 	setTasks(
	// 		(prevTasks) =>
	// 			prevTasks.map((task) =>
	// 				task.id === taskID ? { ...task, text: newText } : task
	// 			) // spread operator of task, then if current task ID matches  ID of task that needs to be edited, then override text with newText. If not match return task(no change)
	// 	);
	// };

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
