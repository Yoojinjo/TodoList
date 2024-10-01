import React, { useState } from "react";

function List({ tasks, handleDelete, handleUpdate }) {
	const [checked, setChecked] = useState({});
	const [editID, setEditID] = useState(null); //  ID of task being edited
	const [editText, setEditText] = useState(""); // Store text for editing

	// toggle checkbox state
	const handleCheckbox = (taskId) => {
		setChecked((prev) => ({
			...prev,
			[taskId]: !prev[taskId],
		}));
	};

	// Handle edit button click
	const handleEditClick = (taskId, taskText) => {
		setEditID(taskId); // Set the task ID to edit
		setEditText(taskText); // Set the text to be edited
	};

	// Save edited text
	const saveEdit = (taskId) => {
		handleUpdate(taskId, editText); // update function from App
		setEditID(null); // Reset edit ID
		setEditText(""); // Clear the edit text
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
					{/* Render text input if editing, otherwise render task text */}
					{editID === task.id ? (
						<input
							type="text"
							value={editText}
							onChange={(e) => setEditText(e.target.value)}
						/>
					) : (
						<p>{task.text}</p>
					)}
					<button
						disabled={checked[task.id]}
						onClick={() => handleEditClick(task.id, task.text)}
					>
						Edit
					</button>
					<button
						disabled={!editText}
						onClick={() => saveEdit(task.id)}
					>
						Save
					</button>

					{/* disable delete button if not checked box */}
					<button
						disabled={!checked[task.id]}
						onClick={() => handleDelete(task.id)}
					>
						Delete
					</button>
				</li>
			))}
		</ul>
	);
}
export default List;
