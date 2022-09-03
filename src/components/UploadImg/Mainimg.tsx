import * as React from 'react'
import styled from 'styled-components'
import { Icon } from '../../assets/icons/index'



const Component = styled.div`


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
picture label{
  margin-top:32px ;
}


` 

export interface IAppProps {

}

export default function Mainimg  (props: IAppProps ){ 
// return <Publish name={prop.nextClick} />;
//  {
  

  return (
    <Component>
        <div className='pic-upload'>
         
          <picture id='main-img'>
            {/* the default camera picture is <FiCamera /> */}
            <Icon />
            <label htmlFor='main-img'>Main image</label>
          </picture>
          </div>
    </Component>
  )

  }