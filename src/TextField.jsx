function TextField({ placeholder, value, onChange }) {
	return (
		<textarea placeholder={placeholder} value={value} onChange={onChange} />
	);
}

export default TextField;
