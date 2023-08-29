import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import AppRoutes from './routes';

const App = () => {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
};

export default App;
