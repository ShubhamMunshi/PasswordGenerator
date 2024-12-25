import React, { useState } from 'react'

export default function Comp1() {
    const[principal,setPrincipal]=useState('')
    const[rate,setRate]=useState('')
    const[time,setTime]=useState('')
    const[interest,setInterest]=useState('')

    function calculate() {
        
        setInterest((principal*rate*time)/36500)
    }
    function clear() {
        
       setPrincipal('')
       setRate('')
       setTime('')
       setInterest('')
    }
  return (
    <>
    <div className='titlename'>
        <h1>Interest Calculator</h1>
    </div>
    <div className='interestcalculator'>
      
      <h2>Enter Principal</h2>
      <input type="number" value={principal} onChange={(e)=> setPrincipal(e.target.value)} style={{textAlign:"center"}}/>
      <h2>Enter Rate</h2>
      <input type="number" value={rate} onChange={(e)=> setRate(e.target.value)} style={{textAlign:"center"}}/>
      <h2>Enter Days</h2>
      <input type='number' value={time} onChange={(e)=> setTime(e.target.value)} style={{textAlign:"center"}}/>
      <button onClick={calculate}>Calculate</button>
      <button onClick={clear}>Clear</button>
      <h2>Interest:-{Math.round(interest)}/-</h2>
    </div>
    </>
  )
}
