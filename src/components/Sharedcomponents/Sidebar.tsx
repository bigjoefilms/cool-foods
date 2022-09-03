import React from 'react'
import styled from 'styled-components'
import { Menu } from '../../assets/icons/index'
import Navbar from './Navbar'

const Component = styled.div`
display:grid;
background:var(--secondary);
padding: 0px 0px;

*{
    margin: 0;
    font-family: 'Inter', sans-serif;
  
}
.side-bar{
    background:#F6F7F9;;
    width: 253px;
    height: auto;
   
}
.side-bar-text{
    font-weight: 700;
    font-size: 20px;
   padding-top: 54px;
   padding-left: 39px;
   margin-bottom: 62px;
}
.list-itms{
    display: flex;
    flex-direction: column;

}
.list-itm{
    display: flex;
    align-items: center;
    justify-content: start;
    margin-left: 41px;
    margin-bottom: 19px;

}
.list-itm p{
    margin-left:14px ;
}
@media all and (max-width:1000px){ 
      
    .side-bar{
      display: none;
    }
}

`
export default function SideBar() {

    return (
        <Component>
             
            <div className="side-bar">
                <h1 className='side-bar-text'>SnackFresh</h1>
                <div className='list-itms'>
                    <a className="list-itm">
                        <Menu/>
                        <p>Recipe</p>
                    </a>
                    <a className="list-itm">
                        <Menu/>
                       <p >Analytics</p>
                    </a>
                    <a className="list-itm">
                        <Menu/>
                       <p> Layout</p>
                    </a>
                </div>

            </div>

        </Component>
    )
}