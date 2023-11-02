import { ThemeProvider, createTheme } from '@mui/material/styles';

// Créez votre thème ici
const theme = createTheme({
  // Vous pouvez personnaliser votre thème ici
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;