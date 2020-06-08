import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './pages/Pages';
import GetCompanies from './context/GetCompanies';
import ColorVariable from './context/ColorVariable';
import { createGlobalStyle } from '../utils/styled-components';

const App: React.FC = () => (
  <ColorVariable>
    <Router basename={process.env.PUBLIC_URL}>
      <GetCompanies>
        <Pages />
        <GlobalStyle />
      </GetCompanies>
    </Router>
  </ColorVariable>
);

export default App;

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
body {
  font-family: Roboto, Arial, sans-serif;
  background-color: ${(props) => props.theme.backgroundPrimary};
}
`;
