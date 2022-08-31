import React from 'react'
import styled from 'styled-components'
import { Menu } from '../../src/assets/icons/index'

const Component = styled.div`

}
`
export default function SideBar() {
  return (
    <Component>
      <div className='top'>
        <h3>SnackFresh</h3>
        <li>
          <Menu />
        </li>
      </div>
    </Component>
  )
}
