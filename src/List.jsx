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

	// i don't think this is actually needed anymore, since not using index as key
	// const handleDeleteCheckBox = (taskId) => {
	// 	setChecked((prev) => {
	// 		const updatedCheck = { ...prev };
	// 		delete updatedCheck[taskId]; //remove deleted item checked
	// 		return updatedCheck;
	// 	});
	// 	handleDelete(taskId); // delete task after remove checkbox
	// };

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
						<button onClick={() => handleDelete(task.id)}>
							Delete
						</button>
					)}
				</li>
			))}
		</ul>
	);
}
export default List;
