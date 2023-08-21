import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// store
import { Provider } from 'react-redux';
import store from './app/store';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';
import { SubstrateContextProvider } from './substrate-lib'

// ----------------------------------------------------------------------

export default function App() {
  return (
    <Provider store={store}>
      <SubstrateContextProvider>
        <HelmetProvider>
          <BrowserRouter>
            <ThemeProvider>
              <ScrollToTop />
              <StyledChart />
              <Router />
            </ThemeProvider>
          </BrowserRouter>
        </HelmetProvider>
      </SubstrateContextProvider>
    </Provider>
  );
}
