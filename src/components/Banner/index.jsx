import styled from "styled-components";

const BannerStyled = styled.header`
  width: 100vw;
  background-color: var(--cor-violeta);
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    aspect-ratio: 10 / 3.5;
    width: 100%;
    height: 100%;
    max-width: var(--container);
    background-image: url("/assets/banner.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const Banner = () => {
  return (
    <BannerStyled className="banner">
      <div></div>
    </BannerStyled>
  );
};

export default Banner;
