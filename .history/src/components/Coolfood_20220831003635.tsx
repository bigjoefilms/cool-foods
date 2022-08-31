import * as React from 'react';
import {foods} from './data'

interface Props {

    
}

export const Coolfood = (props: Props) => {
  return <>
    <main>
      <section className='profile-image'>
        <img src='' alt="profile-image"/>
      </section>

      <h4>Cool foods</h4>
      <div>
        {
          foods.map(food => <div key={food.id}>
            <img src={food.img} alt={food.title} />
          </div>)
        } 
      </div>
    </main>
  </>
}
