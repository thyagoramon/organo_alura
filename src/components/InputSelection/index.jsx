import Label from "../Label"
import "./InputSelection.css"

const InputSelection = ({label, id, items}) => {
	return (
		<div className="InputSelection">
			<Label id={id}>{label}</Label>
			<select id={id}>
				{items.map(item => <option key={item}>{item}</option>)}
			</select>
		</div>
	)
}

export default InputSelection
