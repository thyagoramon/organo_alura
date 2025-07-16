import Label from "../Label"
import "./InputText.css"

const InputText = ({label, id, placeholder, required}) => {
	return (
		<div className="input-text">
			<Label id={id}>{label}</Label>
			<input required={required} type="text" id={id} placeholder={placeholder}/>
		</div>
	)
}

export default InputText
