import "./Button.css"

const Button = ({children}) => {
	return (
		<button type="submit" className="Button">{children}</button>
	)
}

export default Button
