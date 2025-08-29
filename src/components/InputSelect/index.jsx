import styled from "styled-components";
import Label from "../Label";

const InputSelectStyled = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	position: relative;
	select {
		appearance: none;
		background-color: #fff;
		padding: 1rem;
		border: none;
		box-sizing: border-box;
		box-shadow: var(--sombra-p);
		color: var(--cor-preto);
		font-size: 1rem;
	}
	select:invalid {
		color: var(--cor-cinza-medio);
	}

  &:after {
    content: "▼";
    position: absolute;
    top: 60%;
    right: 1rem;
    color: var(--cor-cinza-medio);
    pointer-events: none;
  }
`;

const InputSelect = (props) => {
  const changing = (e) => {
    props.hook(e.target.value);
  };

  return (
    <InputSelectStyled className="InputSelect">
      <Label id={props.id}>{props.label}</Label>
      <select required id={props.id} value={props.value} onChange={changing}>
        <option value="">Selecione um time</option>
        {props.items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </InputSelectStyled>
  );
};

export default InputSelect;
