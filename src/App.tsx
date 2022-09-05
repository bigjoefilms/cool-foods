import React from 'react'
import './App.css'
import { Coolfood } from './components/Coolfoods/Coolfood'
import SideBar from './components/Sharedcomponents/Sidebar'
import styled from 'styled-components'
import Dashboard from './components/Layercomponents/Dashboard'


const Component = styled.div`
 display: grid;
    grid-template-columns: 278px 1fr;
    height: 100vh;
    background: var(--secondary);
    width: auto;
    

    body{
      margin: 0;
      width: auto;
     
    }
    @media all and (max-width:1000px){
      display: grid;
      grid-template-columns: 0px 1fr;

    }
   
  
  
`

const App = () => {
  return (
    <Component>
      {/* <Coolfood /> */}
    <SideBar/>
      <Dashboard />
    </Component>
  )
}

export default App
