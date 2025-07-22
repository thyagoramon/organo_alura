import Label from "../Label"
import "./InputColor.css"

const InputColor = (props) => {
	
	const changing = (e) => {
		props.hook(e.target.value)
	}

	return (
		<div className="input-color">
			<Label id={props.id}>{props.label}</Label>
			<input
				value={props.value}
				onChange={changing}
				type="color"
				id={props.id}
			/>
		</div>
	)
}

export default InputColor
