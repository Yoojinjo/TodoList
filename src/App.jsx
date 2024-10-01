import { useState } from "react";
import { useReducer } from "react";
import "./App.css";
import { v4 as uniqueID } from "uuid"; // import UUID library for unique ids

import AddTask from "./AddTask";
import List from "./List";

function App() {
	const [tasks, setTasks] = useState([]);

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
