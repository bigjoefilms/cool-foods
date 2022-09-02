import * as React from 'react'
import styled from 'styled-components'
import { Dpic } from '../assets/icons/index'


const Component = styled.div`
` 

export interface IAppProps {
 
}

export default function Navbar (props: IAppProps) {
  return (
    <Component>
      <div className='nav-bar'>
        <a href='#' className='adm-text'>Admin test</a>
        <picture className='profile-pic'>
          <Dpic/>
        </picture>
      </div>

     
    </Component>
  )
}
