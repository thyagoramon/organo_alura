import "./Label.css"

const Label = ({id, children}) => {
	return (
		<label className="label" htmlFor={id}>{children}</label>
	)
}

export default Label
