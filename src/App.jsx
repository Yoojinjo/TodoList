import { useState } from "react";
import { useReducer } from "react";
import "./App.css";

import AddTask from "./AddTask";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>Create ToDo List</h1>
			<AddTask />
			<div>
				{" "}
				generate list of todo items
				<div>checkbox in front of item</div>
				<div>
					delete button after item
					<div>delete is disabled until checkbox is checked</div>
				</div>
				<div>
					edit button that replace todo string with a text input
					<div>bind the value of text input to a piece of state</div>
					<div>
						when text input is active, delete and edit buttons
						should be HIDDEN, and save button appears
					</div>
				</div>
				<div>
					input element to create new items and add to list
					<div>new items go to top of list (first in array?)</div>
				</div>
			</div>
		</>
	);
}

export default App;
