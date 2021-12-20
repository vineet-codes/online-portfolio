import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';

import { useGlobalStateContext } from './../contexts/globalContext';
import Nav from './../components/Nav';
import Footer from "./../components/Footer"

const GlobalStyle = createGlobalStyle`
${normalize}

*, *::before, *::after {
  box-sizing: border-box;
}

/* Code for Firefox */
::-moz-selection {
  /* Code for Firefox */
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.background};
}

::selection {
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.background};
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
  line-height: 1.5;
  scroll-behavior: smooth;
  ${'' /* letter-spacing: 0.1ch; */}
}

body {
  margin: 0;
  padding: 0;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  overscroll-behavior: none;
  overflow-x: hidden;
  font-weight: 300;
}

#__next {
  width: 85vw;
  max-width: 750px;
  margin: 0 auto;
  min-height: 90vh; 
  /* to accomodate fixed nav situtation that we have */
  margin-top: 3.5em;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h1,
h2,
strong {
  scroll-margin-top: 6rem;
}
`;

const GlobalLayout = ({ children }) => {
  const { currentTheme } = useGlobalStateContext();
  const darkTheme = {
    background: '#151513',
    text: '#f0f0f0',
    brand: {
      // c1: '#35A7FF',
      // c2: '#38618C',
      // c3: '#FFFFFF',
      // c4: '#FF5964',
      // c5: '#FFE74C'
      c1: '#E76F51',
      c2: '#F4A261',
      c3: '#E9C46A',
      c4: '#2A9D8F',
      c5: '#264653'
    },
  };

  const lightTheme = {
    background: '#ffffff',
    text: '#171717',
    brand: {
      c1: 'rgb(255, 0, 255)',
    },
  };

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Nav />
      {children}
      <Footer/>
    </ThemeProvider>
  );
};

export default GlobalLayout;
