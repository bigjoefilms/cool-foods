import * as React from 'react'
import styled from 'styled-components'
import { Icon } from '../assets/icons/index'
import Navbar from './Navbar'
import{Link}from'react-router-dom'


const Component = styled.div`
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
  <button className='add-btn'>Add</button>

  <h4 className='dash-hd'>Can't find Ingredients</h4>
  <p className='dash-qes'>Create a new one </p>

  <div className='recipe-dash'>
  <label htmlFor='recipe-name'>Find Ingredient</label>
  <input id='recipe-name' type='text' />

  </div>
  <div className="pic-upload-thumb">
  <div className='pic-upload'>
    <picture id='thumbnail-img'>
      {/* the default camera picture is <FiCamera /> */}
      <Icon />
      <label htmlFor='thumbnail-img'>Thumbnail image</label>
    </picture>
    </div>
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