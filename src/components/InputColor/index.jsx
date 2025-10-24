import styled from "styled-components"
import Label from "../Label"

const InputColorStyled = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 1rem;

	input {
		cursor: pointer;
	}
`

const InputColor = ({ hook, id, label, value }) => {
	const changing = (e) => {
		hook(e.target.value)
	}

	return (
		<InputColorStyled>
			<Label id={id}>{label}</Label>

			<input
				value={value}
				onChange={changing}
				type="color"
				id={id}
			/>
		</InputColorStyled>
	)
}

export default InputColor
