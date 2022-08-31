import React from 'react'
import './App.css'
import { Coolfood } from './components/Coolfood'
import Publish from './components/Dashboard'
import SideBar from './components/Sidebar'
import styled from 'styled-components'
import Dashboard from './components/Dashboard'

const Component = styled.div`
   {
    display: grid;
    grid-template-columns: 250px 1fr;
    height: 100vh;
    padding-top: 10px;
    background: var(--secondary);
  }
`
const navPages = [{}]
const App = () => {
  return (
    <Component>
      {/* <Coolfood /> */}
      <SideBar />
      <Dashboard />
    </Component>
  )
}

export default App
