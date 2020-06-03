import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Pages from './pages/Pages';

export interface AppProps {}

const App: React.FC<AppProps> = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Pages />
    <GlobalStyle />
  </Router>
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
  background-color: #181818;
}
`;
