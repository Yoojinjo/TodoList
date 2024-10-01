import React, { useState } from "react";
import Button from "./Button";
import TextField from "./TextField";

function AddTask({ addTask }) {
	const [task, setTask] = useState("");

	const handleInput = (e) => {
		setTask(e.target.value); //add task
	};
	const handleAddTask = () => {
		console.log("added task", task);
		addTask(task);
		setTask(""); //clear input after add
	};

	return (
		<>
			<TextField
				placeholder={"Add Task"}
				value={task}
				onChange={handleInput}
			/>
			<Button buttonName={"AddTask"} onClick={handleAddTask} />
		</>
	);
}

export default AddTask;
