import styled from "styled-components";
import logo from "/assets/logo-branco.svg";
import { useEffect, useState } from "react";

const BannerStyled = styled.header`
  width: 100vw;
  background-color: var(--cor-violeta);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #6278f77f;
    z-index: 0;
  }
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
  gap: 2rem;
  color: var(--cor-grafite);
  z-index: 1;
  img {
    height: 6rem;
  }
  @media (max-width: 726px) {
    width: 90%;    
  }
`;

const Banner = () => {
  const [palavraDinamica, setPalavraDinamica] = useState('')
  
  const pausa = (ms) => new Promise(resolve => setTimeout(resolve, ms));  
  
  useEffect(() => {
    const palavras = ['times', 'grupos', 'equipes']
    
    let ativo = true; // controle pra evitar erros ao desmontar

    const escreverPalavra = async (palavra) => {
      let palavraAtual = ''
  
      for (let letra of palavra) {
        palavraAtual += letra
        setPalavraDinamica(palavraAtual)
        await pausa(200) // tempo entre letras
      }
  
      await pausa(1000) // tempo antes de apagar
      await apagarPalavra(palavra);
    }

    const apagarPalavra = async (palavra) => {
      for (let i = palavra.length; i >= 0; i--) {
        setPalavraDinamica(palavra.slice(0, i))
        await pausa(100); // tempo entre apagar cada letra
      }
    };

    const escreverLista = async () => {
      while (ativo) {
        for (let palavra of palavras) {
          await escreverPalavra(palavra)
        }
      }
    }

    escreverLista()

    return () => {
      ativo = false; // evita loop após desmontagem
    }
  }, [])

  return (
    <BannerStyled>
      <BackgroundStyled>
        <ContentStyled>
          <img src={logo} alt="Logo Organo" />
          <div>
            <h2>Pessoas e {palavraDinamica}</h2>
            <h3>organizados em um só lugar!</h3>
          </div>
        </ContentStyled>
      </BackgroundStyled>
    </BannerStyled>
  );
};

export default Banner;
