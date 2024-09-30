function List({ tasks }) {
	return (
		<ul>
			{tasks.map((task, index) => (
				<li key={index}>
					<input type="checkbox" />
					<p> {task.text}</p>
				</li>
			))}
		</ul>
	);
}
export default List;
