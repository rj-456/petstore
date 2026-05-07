import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import App from './App';
import './index.css';

const theme = createTheme({
  typography: {
    fontFamily: '"Outfit", "Inter", -apple-system, sans-serif',
    h3: {
      fontWeight: 700,
    },
    h1: {
      fontWeight: 800,
    }
  },
  palette: {
    primary: {
      main: '#ff7e67', // Soft Coral
    },
    secondary: {
      main: '#2b9eb3', // Warm Teal
    },
    background: {
      default: 'transparent',
      paper: '#ffffff',
    },
  },
  shape: {
    borderRadius: 16,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
