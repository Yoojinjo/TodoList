import "./App.css";

function Button({ buttonName, onClick }) {
	return <button onClick={onClick}>{buttonName}</button>;
}

export default Button;
