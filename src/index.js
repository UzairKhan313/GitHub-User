import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { GithubContextProvider } from './context/context'
import { Auth0Provider } from '@auth0/auth0-react'
const root = ReactDOM.createRoot(document.getElementById('root'))
console.log(
  process.env.REACT_APP_auth0Domian,
  process.env.REACT_APP_auth0ClientId
)
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_auth0Domian}
      clientId={process.env.REACT_APP_auth0ClientId}
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <GithubContextProvider>
        <App />
      </GithubContextProvider>
    </Auth0Provider>
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
