import * as React from 'react'
import styled from 'styled-components'
import { Icon } from '../../src/assets/icons/index'


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
  margin-top: 99px;
  
}
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
.images{
  margin-top: 28px;
}
.pic-upload{
  margin-top: 39px;
  display: flex;
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
picture label{
  margin-top:32px ;
}
.btm-sec{
  margin-top: 309px;

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
  padding: 13px 40px;

}
.Next-btn{
  background: #796BCC;
  border: 1px solid #E1E6EE;
  border-radius: 10px;
  padding: 13px 40px;
}

` 

export interface IAppProps {
 
}

export default function Dashboard(props: IAppProps) {
  return (
    <Component>
      <div className='nav-bar'>
        <a href='#' className='adm-text'>Admin test</a>
        <picture className='profile-pic'>
          <img src='#' alt='profile-pic' />
        </picture>
      </div>

      <section className='dash-ctn'>
        <h3 className='dash-txt'>Publish</h3>
        <p className='dash-des'>Create recipes and share them in your social</p>
        <div className='recipe-dash'>
        <label htmlFor='recipe-name'>Recipe name</label>
        <input id='recipe-name' type='text' />

        </div>
       

        <div className='images'>
          <p>Images</p>
         <div className='pic-upload'>
          <picture id='thumbnail-img'>
            {/* the default camera picture is <FiCamera /> */}
            <Icon />
            <label htmlFor='thumbnail-img'>Thumbnail image</label>
          </picture>
          <picture id='main-img'>
            {/* the default camera picture is <FiCamera /> */}
            <Icon />
            <label htmlFor='main-img'>Main image</label>
          </picture>
          </div>

        <div className='btm-sec'>
          <hr/>
              <div className='btn-btm'>
              <button className='cancel-btn'>Cancel</button>
              <button className='Next-btn'>Next</button>
          </div>
          </div>
        </div>
      </section>
    </Component>
  )
}
