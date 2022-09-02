import * as React from 'react'
import styled from 'styled-components'
import { Icon } from '../assets/icons/index'
import{Link}from'react-router-dom'
import Navbar from './Navbar'


const Component = styled.div`


` 

export interface IAppProps {

}

export default function Publish  (props: IAppProps ){ 
// return <Publish name={prop.nextClick} />;
//  {
  
   const nextClick = () => {
       alert ('changing message')
  }

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
  