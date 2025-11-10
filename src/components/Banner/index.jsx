import styled from "styled-components";
import logo from "/assets/logo-branco.svg";

const BannerStyled = styled.header`
  width: 100vw;
  background-color: var(--cor-violeta);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

const BackgroundStyled = styled.div`
  width: 100%;
  height: 546px;
  max-width: var(--container);
  background-image: url("/assets/banner-background.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentStyled = styled.div`  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 66%;
  gap: 3rem;
  color: var(--cor-grafite);
  img {
    height: 6rem;
  }
  @media (max-width: 726px) {
    width: 90%;    
  }
`;

const Banner = () => {
  return (
    <BannerStyled>
      <BackgroundStyled>
        <ContentStyled>
          <img src={logo} alt="Logo Organo" />
          <div>
            <h2>Pessoas e times</h2>
            <h3>organizados em um só lugar!</h3>
          </div>
        </ContentStyled>
      </BackgroundStyled>
    </BannerStyled>
  );
};

export default Banner;
