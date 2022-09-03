import * as React from 'react'
import styled from 'styled-components'
import { Dpic } from '../../assets/icons/index'


const Component = styled.div`
.nav-bar{
 display:flex;
 justify-content:end;
 align-items: center;
 margin-top: 14px;
 height: 50px;
 width: auto;
 padding: 0;
 position: absolute;
 top:0;
 right: 0;

 
}
.profile-pic{
  border-radius: 50%;
  background-color: grey;
  height: 30px;
  width: 30px;
  margin-right: 20px;

}
.adm-text{
    text-decoration: none;
    color: #303036;
    font-weight: 300;
    font-size: 18px;
    margin-right: 15px;
    
}
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
