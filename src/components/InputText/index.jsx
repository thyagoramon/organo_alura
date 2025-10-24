import styled from "styled-components";
import Label from "../Label";

const InputTextStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    background-color: var(--cor-branco);
    padding: 1rem;
    border: none;
    font-size: 1rem;
    box-shadow: var(--sombra-p);
    box-sizing: border-box;
    &::placeholder {
      font-size: 1rem;
      color: var(--cor-cinza-medio);
    }
  }
`;

const InputText = (props) => {
  const changing = (e) => {
    props.hook(e.target.value);
  };

  return (
    <InputTextStyled className="input-text">
      <Label id={props.id}>{props.label}</Label>

      <input
        value={props.value}
        onChange={changing}
        required={props.required}
        type="text"
        id={props.id}
        placeholder={props.placeholder}
      />
    </InputTextStyled>
  );
};

export default InputText;
