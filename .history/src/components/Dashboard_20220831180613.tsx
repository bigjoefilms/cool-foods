import * as React from 'react'
import styled from 'styled-components'
import { FiCamera } from 'react-icons/fi'

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
            <img
              src='<svg width="100" height="84" viewBox="0 0 100 84" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.0331 2.18875C34.8059 1.02959 36.1069 0.333333 37.5 0.333333H62.5C63.8931 0.333333 65.1941 1.02959 65.9669 2.18875L73.0633 12.8333H87.5C90.8152 12.8333 93.9946 14.1503 96.3388 16.4945C98.683 18.8387 100 22.0181 100 25.3333V71.1667C100 74.4819 98.683 77.6613 96.3388 80.0055C93.9946 82.3497 90.8152 83.6667 87.5 83.6667H12.5C9.18479 83.6667 6.00537 82.3497 3.66117 80.0055C1.31696 77.6613 0 74.4819 0 71.1667V25.3333C0 22.0181 1.31696 18.8387 3.66117 16.4945C6.00537 14.1503 9.18479 12.8333 12.5 12.8333H26.9367L34.0331 2.18875ZM39.7299 8.66667L32.6335 19.3112C31.8608 20.4704 30.5598 21.1667 29.1667 21.1667H12.5C11.3949 21.1667 10.3351 21.6057 9.55372 22.3871C8.77232 23.1685 8.33333 24.2283 8.33333 25.3333V71.1667C8.33333 72.2717 8.77232 73.3315 9.55372 74.1129C10.3351 74.8943 11.3949 75.3333 12.5 75.3333H87.5C88.6051 75.3333 89.6649 74.8943 90.4463 74.1129C91.2277 73.3315 91.6667 72.2717 91.6667 71.1667V25.3333C91.6667 24.2283 91.2277 23.1685 90.4463 22.3871C89.6649 21.6057 88.6051 21.1667 87.5 21.1667H70.8333C69.4402 21.1667 68.1392 20.4704 67.3665 19.3112L60.2701 8.66667H39.7299Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50 33.6667C43.0964 33.6667 37.5 39.2631 37.5 46.1667C37.5 53.0702 43.0964 58.6667 50 58.6667C56.9036 58.6667 62.5 53.0702 62.5 46.1667C62.5 39.2631 56.9036 33.6667 50 33.6667ZM29.1667 46.1667C29.1667 34.6607 38.4941 25.3333 50 25.3333C61.5059 25.3333 70.8333 34.6607 70.8333 46.1667C70.8333 57.6726 61.5059 67 50 67C38.4941 67 29.1667 57.6726 29.1667 46.1667Z" fill="black"/>
</svg>
'
              alt=''
            />

            <label htmlFor='thumbnail-img'>Thumbnail image</label>
          </picture>
          <picture id='main-img'>
            {/* the default camera picture is <FiCamera /> */}
            <img src='#' alt='' />
            <FiCamera />
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
