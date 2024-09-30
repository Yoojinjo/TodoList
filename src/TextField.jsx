function TextField({ placeholder, value, onChange }) {
	return (
		<input
			type="text"
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
}

export default TextField;
