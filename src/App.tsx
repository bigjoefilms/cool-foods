import React from 'react'
import './App.css'
import { Coolfood } from './components/Coolfood'
import SideBar from './components/Sidebar'
import styled from 'styled-components'
import Dashboard from './components/Dashboard'

const Component = styled.div`
 display: grid;
    grid-template-columns: 278px 1fr;
    height: 100vh;
    background: var(--secondary);

    body{
      margin: 0;
     
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
