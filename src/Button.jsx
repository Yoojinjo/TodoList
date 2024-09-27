import "./App.css";

const handleClick = () => {
	alert("button clicked placeholder");
};

function Button({ name }) {
	return (
		<div>
			<input type="button" value={name} onClick={handleClick} />
			<button onClick={handleClick}>{name}</button>
		</div>
	);
}

export default Button;
