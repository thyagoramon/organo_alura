import styled from "styled-components";
import fbIcon from "@/assets/fb.png";
import twIcon from "@/assets/tw.png";
import igIcon from "@/assets/ig.png";
import logo from "@/assets/logo.png";

const FooterStyled = styled.footer`
	height: 213px;
	width: 100%;
	background-image: url("/assets/fundo.png");
	background-position: center;
	background-repeat: no-repeat;
	background-color: var(--cor-violeta);
	display: flex;
	justify-content: center;
	align-items: center;

  .footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .footer-redes {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    a {
      transition: 0.3s ease;
      &:hover {
        scale: 1.2;
      }
    }
  }

  .footer-logo {
    transition: 0.3s ease;
    &:hover {
      scale: 1.1;
    }
  }

  .footer-dev {
    color: var(--cor-branco);
    font-size: 1rem;
    a {
      color: inherit;
      font-weight: 600;
      transition: 0.3s ease;
      &:hover {
        color: var(--cor-ciano);
      }
    }
  }
`;

const Footer = ({ dev, link }) => {
  return (
    <FooterStyled>
      <div className="footer-container container">
        <div className="footer-redes">
          <a href="#">
            <img src={fbIcon} alt="Facebook" />
          </a>
          <a href="#">
            <img src={twIcon} alt="Twitter" />
          </a>
          <a href="#">
            <img src={igIcon} alt="Instagram" />
          </a>
        </div>
        <a className="footer-logo" href="#">
          <img src={logo} alt="Logo Organo" />
        </a>
        <p className="footer-dev">
          Desenvolvido por{" "}
          <a href={link} target="_blank">
            {dev}
          </a>
        </p>
      </div>
    </FooterStyled>
  );
};

export default Footer;
