import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Add, Dec, Divide, Inc, Multiply, Sub } from '../actions';
// import { InputContext } from '../InputContext';

const Index = () => {

const dispatch = useDispatch();
const state = useSelector((state)=>state)
// const {input,setInput} = useContext(InputContext)
const [input,setInput]=useState([])

  return (
    <>
    <h1>hello:{state.count}</h1>
    <button onClick={()=>dispatch(Dec())}>-</button>
    <button onClick={()=>dispatch(Inc())}>+</button>
    <div>
    <input type='number' value={input} onChange={(e)=>setInput(+(e.target.value))}/>
    
    </div>
    <button onClick={()=>{dispatch(Add(input))}}>Add</button>
    <button onClick={()=>{dispatch(Sub(input))}}>Subtract</button>
    <button onClick={()=>{dispatch(Multiply(input))}}>Multiply</button>
    <button onClick={()=>{dispatch(Divide(input))}}>Divide</button>

    </>
  )
}

export default Index