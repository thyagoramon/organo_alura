import "./SimpleButton.css";

const SimpleButton = ({ children, onClick }) => {
  return (
    <button type="button" className="simpleButton" onClick={onClick}>
      {children}
    </button>
  );
};

export default SimpleButton;
