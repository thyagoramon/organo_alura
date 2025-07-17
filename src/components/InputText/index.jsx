import Label from "../Label"
import "./InputText.css"

const InputText = (props) => {
	
	const changing = (e) => {
		props.hook(e.target.value)
	}

	return (
		<div className="input-text">
			<Label id={props.id}>{props.label}</Label>
			<input value={props.value} onChange={changing} required={props.required} type="text" id={props.id} placeholder={props.placeholder}/>
		</div>
	)
}

export default InputText
