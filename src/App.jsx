import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Productcart from './Components/Productcart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     <Productcart/>
    </>
  )
}

export default App
