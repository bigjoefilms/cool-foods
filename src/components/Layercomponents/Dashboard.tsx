import * as React from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router ,Routes , Route, } from'react-router-dom';
import Publish from '../Sharedcomponents/Publish';
import Ingredients from '../Sharedcomponents/Ingredients';
import Steps from '../Sharedcomponents/Steps';



const Component = styled.div`
  
  
*{
  font-family: 'Inter', sans-serif;
 
  
}
body{
  margin: 0;
  

}

.dash-ctn{
  margin-left: 92px;
  margin-top: 95px;
  width: auto;
  height: auto;
  
}


hr {
    
    margin:0 ;
    max-width: 800px;
    width: auto;
    margin-right: 50px;
    overflow-y: hidden;
    border: 2px solid #E1E6EE;
  
}
.btn-btm{
  margin-top: 32px;
  display: flex;
  width:  auto;
  margin-right: 60px;
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
  color: #FFFFFF;
  margin-top: 17px;
  padding: 10px;
  width: 100px;
  display: flex;
  justify-content: center;
  
  
}
.add-btn:hover{
  opacity: 0.9;
}
.close-btn{
  margin-right: 14px;
 
}
.close-btn:hover{
  opacity: 0.9;
}


/* Resposive view */
@media all and (max-width:1000px){ 
  .dash-ctn{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 30px;
  }
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
        <Route path='/ingredient' element={<Ingredients/>}/>
        <Route path='/steps' element={<Steps/>}/>
    </Routes>
    </Router>
    
    </Component>
   
    
  )
}
