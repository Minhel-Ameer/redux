import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import {incNumber, decNumber, mulNumber, divNumber } from './actions/Index'

const App = () => {
  const myState = useSelector((state)=>state.changeTheNumber);
  const myOtherState = useSelector((state)=>state.multTheNumber);
  
  const dispatch = useDispatch();
  return (
    <>
      <div className='container'>

        <h1>Increment/Decrement Counter</h1>
        <h4>Using React and Redux</h4>

        <div className="quantity">
          <button className="quantiy-minus" title="Decrement" onClick={()=> dispatch(decNumber())}><span>-</span></button>
          <input name="quantity" type="text "className="quantity_input" value={myState}/>
          <button className="quantity_plus" title="Increment" onClick={()=>dispatch(incNumber())}><span>+</span></button>
        </div>
      </div>

      <div className='container my-5'>

        <h1>Multiply/Devide</h1>
        <h4>Using React and Redux</h4>

          <div className="quantity">
            <button className="quantiy-minus" title="Decrement" onClick={()=> dispatch(divNumber())}><span>/</span></button>
            <input name="quantity" type="text "className="quantity_input" value={myOtherState}/>
            <button className="quantity_plus" title="Increment" onClick={()=>dispatch(mulNumber())}><span>*</span></button>
          </div>
      </div>
    </>
  )
}

export default App
