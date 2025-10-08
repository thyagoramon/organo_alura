import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
	--container: 1440px;
  --fonte-prata: "Prata", serif;
  --fonte-montserrat: "Montserrat", sans-serif;
	--cor-preto: #000;
  --cor-branco: #fff;
  --cor-violeta: #6278F7;
  --cor-vermelho: rgb(255, 55, 55);
  --cor-cinza-claro: #f6f6f6;
  --cor-cinza-medio: #a4a4a4;
  --cor-grafite: #212121;
  --cor-ciano: #95ffd4;
  --sombra-p: 4px 4px 12px rgba(0, 0, 0, 10%);
  --sombra-m: 8px 8px 12px rgba(0, 0, 0, 10%);
  --sombra-g: 12px 12px 12px rgba(0, 0, 0, 10%);
}

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
}

body {  
  background-color: #fff;
  color: #000;
  font-family: var(--fonte-montserrat);
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

h3 {
  font-family: var(--fonte-prata);
  font-size: 24px;
  font-weight: 500;
}

.section {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.padding {
  padding: 64px 0;
}

.container {
  max-width: var(--container);
}

.gap {
  gap: 16px;
}

#root {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
`;

export default GlobalStyles;
