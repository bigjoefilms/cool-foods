import * as React from 'react'
import styled from 'styled-components'
import{Link}from'react-router-dom'
import Navbar from './Navbar'
import Thumbnailpics from '../UploadImg/Thumbnailpics'
import Mainimg from '../UploadImg/Mainimg'


const Component = styled.div`
.dash-txt{
  font-weight: 400;
  font-size: 25px;
  margin-bottom: 0;
  
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
  margin-top: 39px;
 
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
  width: auto;
  height: 47px;
  border: 1px solid #E1E6EE;
  border-radius: 10px; 
  margin-top: 10px;
  font-size: 17px;
  max-width: 618px;
  margin-right: 100px;
  padding-left: 20px;
  
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


.images{
  margin-top: 28px;
  position: relative;
  
}
.pub-img{
  display: flex;
}

@media all and (max-width:1250px){
  .recipe-int{
    flex-direction: column;
  }
  .recipe-cnt{
    margin-top: 20px;
  }
}
@media all and (max-width:1000px){ 
  .dash-ctn{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 30px;
  }
.pic-upload{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.pic-upload picture{
  margin-bottom: 40px;

}
.pub-img{
  display: flex;
  flex-direction: column;
}

}

` 

export interface IAppProps {

}

export default function Publish  (props: IAppProps ){ 
// return <Publish name={prop.nextClick} />;
//  {
  


  return (
    <Component>
     <Navbar/>
      <section className='dash-ctn'>
        <h3 className='dash-txt'>Publish</h3>
        <p className='dash-des'>Create recipes and share them in your social</p>
        <div className='recipe-dash'>
        <label htmlFor='recipe-name'>Recipe name</label>
        <input id='recipe-name' type='text' />

        </div>
       

        <div className='images'>
          <p>Images</p>
         <div className='pub-img'>
          <Thumbnailpics/>
          <Mainimg/>
          </div>
         
       
        <div className='btm-sec'>
          <hr/>
              <div className='btn-btm'>
              <button className='cancel-btn'>Cancel</button>
              <Link to="/ingredient">
              <button   className='Next-btn'>Next</button>
              </Link>
          </div>
          </div>
          </div>
        
      </section>
     
   


     
    </Component>
  )

  }
  