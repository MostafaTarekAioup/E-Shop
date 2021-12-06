import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AppProvider} from './ContextAPI/context'
import store from './redux'
import {Provider} from 'react-redux'
import {Auth0Provider} from '@auth0/auth0-react'
//dev-98jbjt6c.us.auth0.com
//uhfTmiA3ZHEp6olqdxXjW9AVgBOGq5ic
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-98jbjt6c.us.auth0.com"
      clientId="uhfTmiA3ZHEp6olqdxXjW9AVgBOGq5ic"
      redirectUri={window.location.origin}
      cacheLocation = 'localstorage'
    >
      <Provider store={store}>
        <AppProvider>
            <App />
        </AppProvider>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
