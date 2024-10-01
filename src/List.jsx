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

	return (
		<ul>
			{tasks.map((task, index) => (
				<li key={index}>
					<input
						type="checkbox"
						onChange={() => handleCheckbox(index)}
						checked={checked[index]}
					/>
					<p> {task.text}</p>
					{/* add delete button if checked box */}
					{checked[index] && (
						<button onClick={() => handleDelete(index)}>
							Delete
						</button>
					)}
				</li>
			))}
		</ul>
	);
}
export default List;
