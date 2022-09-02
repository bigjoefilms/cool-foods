import * as React from 'react'
import styled from 'styled-components'



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
          <img src='#' alt='profile-pic' />
        </picture>
      </div>

     
    </Component>
  )
}
