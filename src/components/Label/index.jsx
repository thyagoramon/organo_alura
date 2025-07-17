import "./Label.css"

const Label = (props) => {
	return (
		<label className="label" htmlFor={props.id}>{props.children}</label>
	)
}

export default Label
