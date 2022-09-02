import React, { Attributes, ReactEventHandler, useState } from 'react'
import styled from 'styled-components'
import { RemoveBtn } from '../assets/icons/index'
import{Link}from'react-router-dom'
import Navbar from './Navbar'

const Component = styled.div`
`

const Steps = () => {
  const [steps, setSteps] = useState('')
  const [stepList, setStepList] = useState<any[]>([])

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    if (steps) {
      const items = { id: new Date().getTime().toString(), steps }
      setStepList((list) => {
        return [...list, items]
      })
      setSteps('')
    } else {
      alert('Input a step')
    }
  }

  const removeHandler = ({ id }: { id: number }) => {
    const remove = stepList.filter((item) => item.id !== id)
    setStepList(remove)
  }

  return (
    <>
    <Navbar/>
      <section className='dash-ctn'>
        <form className='steps-fill'>
          <h3 className='dash-txt'>Steps</h3>
          <p className='dash-des'>Add steps</p>
          <input
            type='text'
            placeholder=' Type in a step'
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
          <button className='add-stp' onClick={handleSubmit}>Add a step</button>
        </form>

        {stepList.map(
          (step) =>
            step.id && (
              //   const { steps, id } = item
              <div key={step.id}>
                <ul className='stps'>
                  <li className='stps-list' >
                    <a className='close-btn' onClick={() => removeHandler(step)}>
                      <RemoveBtn />
                    </a>
                    {step.steps}
                  </li>
                </ul>
              </div>
            )
        )}
        <div className='btm-sec'>
          <hr/>
              <div className='btn-btm'>
              <Link to="/ingredient">
              <button className='cancel-btn'>Back</button>
              </Link>
              <button   className='Next-btn'>Next</button>
              
          </div>
          </div>
        
      </section>
    </>
  )
}

export default Steps