import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@/app';
import { BrowserRouter } from 'react-router-dom';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { themeServices } from '@/features/theme/services';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <CssVarsProvider theme={themeServices}>
        <App />
      </CssVarsProvider>
    </BrowserRouter>
  </StrictMode>
);
