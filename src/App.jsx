import { useCallback, useState, useEffect, useRef } from 'react'
 import './App.css'
// import Comp1 from './Comp1'

function App() {
 const[length,setLength]=useState(6)
 const[charAllowed, setCharAllowed]=useState(false)
 const[numAllowed, setNumAllowed]=useState(false)
 const[password,setPassword]=useState("")

 let passwordgenerator=useEffect(()=>{
  //  now we have to create one variable name pass which will pass to setPassword
  let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  // now we if charAllowed is true then we add character to str
  if(charAllowed){
    str += "@#$%^&*~!"
  }
  // if numALlowed is true then we add number to string
  if(numAllowed){
    str += "0123456789"
  }
  // now create one loop which will return the password
  for (let i = 1; i <= length; i++) {
    let char=Math.floor(Math.random() * str.length +1)

    pass += str.charAt(char)
  }

   setPassword(pass)

 },[length,charAllowed,numAllowed,setPassword])

 const passwordRef=useRef(null);

 useEffect(() => {
  console.log("useeffect hook called")
  passwordgenerator
 }, [length,numAllowed,charAllowed,passwordgenerator])



 const copypassword=useCallback(()=>{
  // the .select() method is used to select the password
  passwordRef.current?.select();
  // this is used to copy only password of 20 characters only
  passwordRef.current?.setSelectionRange(0,20);
  window.navigator.clipboard.writeText(password)
 },[password])

  return (
    <>
    <div className='w-full max-w-full mx-auto rounded-lg  my-8  text-orange-500 bg-gray-700 px-5 py-5'>
    <h1 className='py-3 text-amber-400'><center><b style={{fontSize:"25px"}}>Password Generator</b></center></h1>

         <div className='flex shadow  rounded-lg overflow-hidden mb-4 '>
                <input type="text"
                 value={password}
                  placeholder='Password'
                    readOnly 
                    className='outline-none w-full py-3 px-3'
                   ref={passwordRef}
                 />
                <button className='bg-blue-700 px-3 text-white font-bold ' onClick={copypassword}>Copy</button>
         </div>

         <div className=' flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1 '>
                <input 
                type="range" 
                value={length}
                min={6}
                max={50}
                className='cursor-pointer'
                onChange={(e)=>setLength(e.target.value)}
                 />
                 <label >Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-2'>
              <input type="checkbox"
              defaultChecked={numAllowed}
              id='numberInput'
              onChange={()=>{
                setNumAllowed((previous) => !previous);
              }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>

            <div className='flex  gap-x-2'>
              <input type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={()=>{
                setCharAllowed((previous) => !previous);
              }}
              />
              <label htmlFor='charInput'>Characters</label>
            </div>
         </div>
    </div>
    
 
   
   



    </>
  )
}

export default App
