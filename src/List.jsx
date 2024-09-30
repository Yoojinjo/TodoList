function List({ tasks }) {
	return (
		<div>
			{tasks.map((task, index) => (
				<p key={index}>{task.text}</p>
			))}
		</div>
	);
}
export default List;
