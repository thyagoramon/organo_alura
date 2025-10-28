import styled from "styled-components";
import CloseButton from "../CloseButton";
import { useDispatch, useSelector } from "react-redux";
import { resetModals } from "@/store/modalSlice";

const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  .window {
    background-color: var(--cor-cinza-claro);
    box-shadow: var(--sombra-m);
    padding: 3rem;
    border-radius: 1rem;
    display: flex;    
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;
    z-index: 10;
    position: relative;
  }

  .closeButton {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
  }
`;

const Modal = ({ modalName, children }) => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modal[modalName]);
  const close = () => dispatch(resetModals());

  return (
    open &&
      <ModalStyled onClick={close}>
        <div className="window" onClick={(e) => e.stopPropagation()}>
          <div className="closeButton"><CloseButton onClick={close}/></div>
          
          {children}
        </div>
      </ModalStyled>    
  );
};

export default Modal;
