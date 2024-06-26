import { ThemeProvider } from 'next-themes';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";



function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider forcedTheme={Component.theme || undefined}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

