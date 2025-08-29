import styled from "styled-components";

const LabelStyled = styled.label`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Label = (props) => {
  return (
    <LabelStyled className="label" htmlFor={props.id}>
      {props.children}
    </LabelStyled>
  );
};

export default Label;
