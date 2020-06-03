import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './pages/Pages';

export interface AppProps {}

const App: React.FC<AppProps> = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Pages />
  </Router>
);

export default App;
