import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/global.scss';
import {store} from './redux/store.js';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary.jsx';

// Полифил для global
if (typeof window !== 'undefined' && typeof global === 'undefined') {
  window.global = window;
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter basename='admin-headlight-shop'>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  </StrictMode>

)
