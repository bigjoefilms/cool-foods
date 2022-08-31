import * as React from 'react';
import {foods} from './data'

interface Props {

    
}

export const Coolfood = (props: Props) => {
  return <>
    <main>
      <section className='profile-image'>
        <img src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' alt="profile-image"/>
      </section>

      <h4>Cool foods</h4>
      <section>
        {
          foods.map((food) => {
            const {id, img, name} = food
            return (
              <div key={id}>
                <img src={img} alt={name} />
                <p>{name}</p>
              </div>
            )
          })
        } 
      </section>
    </main>
  </>
} 
