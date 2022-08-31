import * as React from 'react'
import styled from 'styled-components'

const Component = styled.div`

}`

export interface IAppProps {}

export default function Dashboard(props: IAppProps) {
  return (
    <Component>
      <div>
        <a href='#'>Admin test</a>
        <picture>
          <img src='#' alt='profile-image' />
        </picture>
      </div>

      <form>
        <h3>Publish</h3>
        <p>Create recipes and share them in your social</p>

        <label htmlFor='recipe-name'>Recipe name</label>
        <input id='recipe-name' type='text' />

        <section className='images'>
          <p>Images</p>

          <picture id='thumbnail-img'>
            {/* the default camera picture is <FiCamera /> */}

            <label htmlFor='thumbnail-img'>Thumbnail image</label>
          </picture>
          <picture id='main-img'>
            {/* the default camera picture is <FiCamera /> */}

            <label htmlFor='main-img'>Main image</label>
          </picture>

          <hr />
          <button className='cancel-btn'>Cancel</button>
          <button className='Next-btn'>Next</button>
        </section>
      </form>
    </Component>
  )
}
