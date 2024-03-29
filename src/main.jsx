import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
//import './index.css'
//import greeting from './components/greeting'
import './components/style.css'
import {UserCard} from './UserCard'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserCard/>

  </React.StrictMode>
)
