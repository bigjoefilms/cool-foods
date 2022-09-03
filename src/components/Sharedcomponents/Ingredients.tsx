import * as React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import{Link}from'react-router-dom'
import Thumbnailpics from '../UploadImg/Thumbnailpics'



const Component = styled.div`
.dash-txt{
  font-weight: 400;
  font-size: 25px;
  margin-bottom: 0;
  
}
.pic-upload-thumb{
  margin-left: 220px;
  margin-bottom: 209px;
}
.dash-des{
  font-weight: 300;
  font-size: 17px;
  color: #5F606C;
  margin-top: 17px;
  margin-bottom: 39px;
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
.recipe-dash{
  display: flex;
  flex-direction: column;
  margin-top: 108px;
 
}
.recipe-cnt{
  display: flex;
  flex-direction: column;
}
.recipe-ctn-1{
  width: auto;
  height: 47px;
  min-width: 400px;
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
    position: absolute;
  }
  .pic-upload-thumb{
    margin: 0;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.pic-upload{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.pic-upload picture{
  margin-bottom: 100px;

}
}
` 
export interface IAppProps {
 
}

export default function Ingredients (props: IAppProps) {
  return (
    <Component>
      <Navbar/>
        <section className='dash-ctn'>

<h3 className='dash-txt'>Ingredients</h3>
  <p className='dash-des'>Add Ingredients </p>
  <div className='recipe-int'>
          <div className="recipe-cnt">
              <label htmlFor='recipe-name'>Ingredient Name</label>
              <input id='recipe-name' className="recipe-ctn-1" type='text' />
        </div>
        <div className="recipe-cnt">
              <label htmlFor='recipe-name'>Quantity</label>
              <input id='recipe-name' className="recipe-ctn-2" type='text' />
        </div>
        

  </div>
  <a className='add-btn'>Add</a>

  <h4 className='dash-hd'>Can't find Ingredients</h4>
  <p className='dash-qes'>Create a new one </p>

  <div className='recipe-dash'>
  <label htmlFor='recipe-name'>Find Ingredient</label>
  <input id='recipe-name' type='text' />

  </div>
  <div className="pic-upload-thumb">
 <Thumbnailpics/>
    </div>

    <div className='btm-sec-ing'>
          <hr/>
              <div className='btn-btm'>
                
              <Link to="/publish">
              <button className='cancel-btn'>Back</button>
              </Link>
              <Link to="/steps">
              <button className='Next-btn'>Next</button>
              </Link>
              
              </div>
    </div>
  
   
</section>
  </Component>
    )}