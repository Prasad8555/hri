import React from 'react';
import ReactDOM from 'react-dom/client';
import Loader from './Components/Loader';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
const App = React.lazy(() => import('./App'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Suspense fallback={<Loader />}>
      <App />
    </React.Suspense>
  </React.StrictMode>
);

reportWebVitals();
