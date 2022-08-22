import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from "react-router-dom"
import UserProvider from './contexts/UserContext';
import { TechsContextProvider } from './contexts/TechsContext';

//meu UserProvider tem que ficar abaixo do Router por questão de hierarquia.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <UserProvider>
          <TechsContextProvider>
            <App />
          </TechsContextProvider>
        </UserProvider>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
