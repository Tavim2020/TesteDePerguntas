import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import theme from './themes/theme';
import { GlobalStorage } from './context/GlobalContext';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStorage>
     <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </GlobalStorage>
  </React.StrictMode>,
  document.getElementById('root')
);

