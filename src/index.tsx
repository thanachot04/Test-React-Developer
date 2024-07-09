import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Number2 from './pages/number2';
import Number1 from './pages/number1';
import Home from './pages/home';
import { I18nextProvider } from 'react-i18next';
import i18n from './components/i18n';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/number1" element={<Number1 />} />
          <Route path="/number2" element={<Number2 />} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
    {/* <App /> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
