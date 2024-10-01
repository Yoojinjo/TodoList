import React, { useState } from "react";

function List({ tasks, handleDelete }) {
	const [checked, setChecked] = useState({});

	// toggle checkbox state
	const handleCheckbox = (taskId) => {
		setChecked((prev) => ({
			...prev,
			[taskId]: !prev[taskId],
		}));
	};

	// delete task
	const handleDeleteCheckBox = (taskId) => {
		setChecked((prev) => {
			const updatedCheck = { ...prev };
			delete updatedCheck[taskId]; //remove deleted item checked
			return updatedCheck;
		});
		handleDelete(taskId); // delete task after remove checkbox
	};

	return (
		<ul>
			{tasks.map((task) => (
				<li key={task.id}>
					<input
						type="checkbox"
						onChange={() => handleCheckbox(task.id)}
						checked={checked[task.id] || false}
					/>
					<p> {task.text}</p>
					{/* add delete button if checked box */}
					{checked[task.id] && (
						<button onClick={() => handleDeleteCheckBox(task.id)}>
							Delete
						</button>
					)}
				</li>
			))}
		</ul>
	);
}
export default List;
