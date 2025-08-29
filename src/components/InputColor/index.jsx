import styled from "styled-components"
import Label from "../Label"

const InputColorStyled = styled.div`
	width: 100%;
	display: flex;
	gap: 1rem;
	input {
		cursor: pointer;
	}
`

const InputColor = (props) => {	
	const changing = (e) => {
		props.hook(e.target.value)
	}

	return (
		<InputColorStyled>
			<Label id={props.id}>{props.label}</Label>
			<input
				value={props.value}
				onChange={changing}
				type="color"
				id={props.id}
			/>
		</InputColorStyled>
	)
}

export default InputColor
