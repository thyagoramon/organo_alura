import "./InputText.css"

const InputText = ({label, id, placeholder}) => {
	return (
		<div className="input-text">
			<label htmlFor={id}>{label}</label>
			<input type="text" id={id} placeholder={placeholder}/>
		</div>
	)
}

export default InputText
