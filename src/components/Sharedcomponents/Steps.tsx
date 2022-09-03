import React, { Attributes, ReactEventHandler, useState } from 'react'
import styled from 'styled-components'
import { RemoveBtn } from '../../assets/icons/index'
import{Link}from'react-router-dom'
import Navbar from './Navbar'

const Component = styled.div`
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
.steps-fill {
 margin-bottom: 209px;
 position: relative;
}
.steps-input textarea{
  width: auto;
  height: 116px;
  max-width: 618px;
  border: 1px solid #E1E6EE;
  border-radius: 10px; 
  margin-top: 10px;
  margin-right: 100px;
  margin-bottom: 70px;
  padding: 20px;
  font-weight: 400;
  font-size: 17px;
 

}
.added-steps{
  padding-bottom: 5px;
}

.steps-input textArea::placeholder{

  position: absolute;
  font-weight: 400;
  font-size: 17px;
}
.steps-input{
  display: flex;
  flex-direction: column;
}

.add-stp{
  margin-bottom: 150px ;
  background: #796BCC;
  border: 1px solid #E1E6EE;
  border-radius: 10px;
  padding: 15px;
  width: 130px;
  color: #FFFFFF;
  margin-top: 17px;

}
.add-stp:hover{
  opacity: 0.9;
}
.stps{
  display: flex;
  align-items: center;
  justify-content: start;
  text-decoration: none;
  list-style: none;
  padding: 0;
}
.stps-list{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.add-btn{
  background: #796BCC;
  border: 1px solid #E1E6EE;
  border-radius: 10px;
  color: #FFFFFF;
  margin-top: 17px;
  padding: 10px;
  width: 100px;
  display: flex;
  justify-content: center;
  
  
}
.add-btn:hover{
  opacity: 0.9;
}
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
    <Component>
    <Navbar/>
      <section className='dash-ctn'>
        <form className='steps-fill'>
          <h3 className='dash-txt'>Steps</h3>
          <p className='dash-des'>Add steps</p>
          < div className="steps-input">
         
          <textarea 
            placeholder=' Type in a step'
            value={steps}
            onChange={(e) => setSteps(e.target.value)} name="comment" form="usrform" >
            </textarea>
          <button className='add-stp' onClick={handleSubmit}>Add a step</button>
          </div>
        
       

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
                    <div className='added-steps'>
                    {step.steps}
                    </div>
                  </li>
                </ul>
              </div>
            )
        )}
         </form>
        <div className='btm-sec'>
          <div className='hr'>
          <hr/></div>
              <div className='btn-btm'>
              <Link to="/ingredient">
              <button className='cancel-btn'>Back</button>
              </Link>
              <button   className='Next-btn'>Next</button>
              
          </div>
          </div>
        
      </section>
      </Component>
  )
}

export default Steps