import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonAdd from './components/ButtonAdd'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <div>
        割り勘アプリを作ってみよう
      </div>
      <div>
        <ButtonAdd />
      </div>
    </>
  )
}

export default App
