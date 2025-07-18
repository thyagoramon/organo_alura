import Label from "../Label"
import "./InputSelect.css"

const InputSelect = (props) => {
	const changing = (e) => {
		props.hook(e.target.value)
	}

	return (
		<div className="InputSelect">
			<Label id={props.id}>{props.label}</Label>
			<select required id={props.id} value={props.value} onChange={changing}>
				<option value=''>Selecione um time</option>
				{props.items.map(item => <option key={item}>{item}</option>)}
			</select>
		</div>
	)
}

export default InputSelect
