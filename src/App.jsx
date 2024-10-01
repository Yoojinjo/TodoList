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

	return (
		<>
			<h1>Create ToDo List</h1>

			<div className="Tasks">
				<List tasks={tasks} handleDelete={handleDelete} />
			</div>
			<AddTask addTask={addTask} />
		</>
	);
}

export default App;
