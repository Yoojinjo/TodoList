import React, { useState } from "react";

function List({ tasks, handleDelete }) {
	const [checked, setChecked] = useState({});

	// toggle checkbox state
	const handleCheckbox = (index) => {
		setChecked((prev) => ({
			...prev,
			[index]: !prev[index],
		}));
	};

	// next list item inherits checkbox of deleted item
	const handleDeleteCheckBox = (index) => {
		setChecked((prev) => {
			const updatedCheck = { ...prev };
			delete updatedCheck[index]; //remove deleted item checked
			return updatedCheck;
		});
		handleDelete(index); // delete task after remove checkbox
	};

	return (
		<ul>
			{tasks.map((task, index) => (
				<li key={index}>
					<input
						type="checkbox"
						onChange={() => handleCheckbox(index)}
						checked={checked[index] || false}
					/>
					<p> {task.text}</p>
					{/* add delete button if checked box */}
					{checked[index] && (
						<button onClick={() => handleDeleteCheckBox(index)}>
							Delete
						</button>
					)}
				</li>
			))}
		</ul>
	);
}
export default List;
