import * as React from 'react'
import styled from 'styled-components'
import { Icon } from '../../src/assets/icons/index'
import Navbar from './Navbar'
import Publish from './Publish'
import {useState} from 'react';
import {BrowserRouter as Router ,Routes , Route, } from'react-router-dom';
import Ingredients from './Ingredients'
import Steps from './Steps'



const Component = styled.div`
  
  
*{
  font-family: 'Inter', sans-serif;
 
  
}
body{
  margin: 0;

}

.dash-ctn{
  margin-left: 92px;
}
.nav-bar{
 display:flex;
 justify-content:end;
 align-items: center;
 margin-top: 14px;
}
.adm-text{
    text-decoration: none;
    color: #303036;
    font-weight: 300;
    font-size: 18px;
    margin-right: 15px;
    
}
.profile-pic{
  border-radius: 50%;
  background-color: grey;
  height: 30px;
  width: 30px;
  margin-right: 20px;

}
.dash-ctn{
  margin-top: 95px;
  
}
.dash-txt{
  font-weight: 400;
  font-size: 25px;
  margin-bottom: 0;
  
}
.dash-hd{
  font-weight: 500;
font-size: 15px;

}
.dash-qes{
  font-weight: 400;
font-size: 13px;
color: #5F606C;
}
.dash-des{
  font-weight: 300;
  font-size: 17px;
  color: #5F606C;
  margin-top: 17px;
  margin-bottom: 39px;
}
.recipe-dash{
  display: flex;
  flex-direction: column;
  margin-top: 108px;
 
}
.recipe-cnt{
  display: flex;
  flex-direction: column;
}
.recipe-dash label{
  font-weight: 400;
  font-size: 15px;

}
.recipe-dash input{
  width: 618px;
  height: 47px;
  border: 1px solid #E1E6EE;
  border-radius: 10px; 
  margin-top: 10px;
}
.recipe-name{
  width: 618px;
  height: 47px;
  display: flex;
  flex-direction: row;
}
.recipe-int{
  display: flex;
  flex-direction: row;
}
.recipe-ctn-1{
  width: 400px;
  height: 47px;
  border: 1px solid #E1E6EE;
  border-radius: 10px; 
  margin-top: 10px;
  margin-right: 36px;

}
.recipe-ctn-2{
  width: 140px;
  height: 47px;
  border: 1px solid #E1E6EE;
  border-radius: 10px; 
  margin-top: 10px;

}

.images{
  margin-top: 28px;
  
}
.pic-upload{
  margin-top: 39px;
  display: flex;
  margin-bottom: 309px;
}
.pic-upload picture{
  background: #FFFFFF;
  border: 1px solid #E1E6EE;
  border-radius: 10px;
  width: 278px;
  height: 211px;
  margin-right: 59px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.pic-upload-thumb{
  margin-left: 220px;
}
picture label{
  margin-top:32px ;
}
.btm-sec{


}
.btm-sec-ing{
  margin-top: 50px;

}
hr {
    width: 857px;
    margin:0 ;
    border: 2px solid #E1E6EE;
  
}
.btn-btm{
  margin-top: 32px;
  display: flex;
  width:  857px;
  justify-content: space-between;
  margin-bottom: 21px;
}
.cancel-btn{
  background: #FFFFFF;
  border: 1px solid #E1E6EE;
  border-radius: 10px;
  padding: 13px 43px;

}
.Next-btn{
  background: #796BCC;
  border: 1px solid #E1E6EE;
  border-radius: 10px;
  padding: 13px 40px;
  color: #FFFFFF;
}
.add-btn{
  background: #796BCC;
  border: 1px solid #E1E6EE;
  border-radius: 10px;
  padding: 13px 49px;
  color: #FFFFFF;
  margin-top: 17px;

}
.stps{
  display: flex;
  align-items: center;
  justify-content: start;
  text-decoration: none;
  list-style: none;
  padding: 0;
  

}
.stps-list{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  
}
.close-btn{
  margin-right: 14px;
 
}

.steps-fill {
 margin-bottom: 209px;
 position: relative;
}
.steps-fill input{
  width: 618px;
  height: 116px;
  border: 1px solid #E1E6EE;
  border-radius: 10px; 
  margin-top: 10px;
  position: absolute;
  margin-bottom: 70px;
  position: relative;
 

}

.steps-fill input::placeholder{
  padding-left: 20px;
  margin-top: 13px;
  position: absolute;
  font-weight: 400;
  font-size: 17px;
}
.steps-input{
  display: flex;
  flex-direction: column;
  

}
.add-stp{
  margin-bottom: 150px ;
  background: #796BCC;
  border: 1px solid #E1E6EE;
  border-radius: 10px;
  padding: 13px;
  max-width: 131px;
  max-height: 44px;
  color: #FFFFFF;
  margin-top: 17px;

}


` 


export interface IAppProps {
  
 
}
const Home = () =>( 
  <>
 
  </>
)

export default function Dashboard (props: IAppProps ) { 
  
  
  return (
    
    <Component>
       <Router>
          
          
          <Routes>
          <Route path='/' element={<Home/>}/>
        <Route path='/publish' element={<Publish/>}/>
        <Route path='/ingredient' element={<Ingredients />}/>
        <Route path='/steps' element={<Steps/>}/>

    </Routes>
    </Router>
    
    </Component>
   
    
  )
}
