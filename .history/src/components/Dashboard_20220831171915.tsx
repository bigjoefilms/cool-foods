import * as React from 'react'
import styled from 'styled-components'

import SideBar from './Sidebar'

const Component = styled.div`

}`

export interface IAppProps {}

export default function Dashboard(props: IAppProps) {
  return (
    <Component>
      <SideBar />
      <nav></nav>
      <div>
        <a href='#'>Admin test</a>
        <img src='#' alt='profile-image' />
      </div>

      <h3>Publish</h3>
      <p>Create recipes and share them in your social</p>

      <label htmlFor='recipe-name'>Recipe name</label>
      <input id='recipe-name' type='text' />
    </Component>
  )
}
