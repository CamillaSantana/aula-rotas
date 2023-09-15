import './App.css'
import Rodape from './components/Rodape'
import Menu from './components/Menu'
import { Outlet } from 'react-router-dom'


function App() {
  
  return(
    <>
      <Menu/>
      <Outlet/>
      <Rodape/>
    </>
  )
  
}

export default App
