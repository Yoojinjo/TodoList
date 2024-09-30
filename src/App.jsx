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

	return (
		<>
			<h1>Create ToDo List</h1>

			<div className="Tasks">
				<List tasks={tasks} />
			</div>
			<AddTask addTask={addTask} />
		</>
	);
}

export default App;
