import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'

function App() {
  let  name = "yazhini"
  let occ = "student"
  return(
    <Dashboard name={name} occ={occ}/>
    
  )
}

export default App
