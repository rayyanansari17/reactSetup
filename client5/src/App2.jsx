
import { useState } from 'react'
const App = ()=>{

const [age,setAge] = useState(18)
const [hobbies,sethobbies] = useState(["gym","coding"])

function addAge (){
  setAge(age + 1)
}

function subAge (){
  setAge(age - 1)
}





  return(
    <>
    <h1 className='text-5xl font-extrabold text-center'>Updown Counter</h1>
    <h3  className='text-4xl font-bold my-5 text-center'>Age: {age}</h3>
    <p className='text-center font-bold text-2xl'>Status: {age >= 18 ? "Adult" : "Minor"}</p>
    {age>=40 && <p className='text-center font-bold text-2xl'>Senior Citizen</p>}


    {
      hobbies.map((x,i) =>
      (
          <li key={i} className=' my-2 text-center font-bold text-2xl'>{x}</li>
      )
      
      )
    }



    <div className='flex justify-center'>
    <button
    onClick={addAge}
    className='border-2 rounded-2xl bg-blue-800 cursor-pointer text-white hover:bg-blue-300 hover:text-black p-6 text-xl font-bold'>Increase</button>
    
    <button onClick={subAge} className='border-2 rounded-2xl bg-blue-800 cursor-pointer text-white hover:bg-blue-300 hover:text-black p-6 text-xl font-bold'>decrease</button>
    </div>
    
    </>
  )
}

export default App