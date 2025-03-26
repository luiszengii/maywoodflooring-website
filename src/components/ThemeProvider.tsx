'use client';

import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import EmotionCache from './EmotionCache';

const theme = createTheme({
  // ... your existing theme configuration ...
});

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <EmotionCache>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </EmotionCache>
  );
}