import { useState } from "react";
import { useReducer } from "react";
import "./App.css";

import AddTask from "./AddTask";
import List from "./List";

function App() {
	const [tasks, setTasks] = useState([]);

	const addTask = (task) => {
		setTasks([task, ...tasks]);
	};

	// Delete task filter method creates new array  i !== index, keeps only tasks whose index (i) is not equal to the index of the task we want to delete.

	const handleDelete = (index) => {
		setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
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
