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
      <div>
        <a href='#'>Admin test</a>
        <img src='#' alt='profile-image' />
      </div>
      <form>
        <h3>Publish</h3>
        <p>Create recipes and share them in your social</p>

        <label htmlFor='recipe-name'>Recipe name</label>
        <input id='recipe-name' type='text' />
        <section>
          <p>Images</p>

          <hr />
          <button className='cancel-btn'>Cancel</button>
          <button className='Next-btn'>Next</button>
        </section>
      </form>
    </Component>
  )
}
