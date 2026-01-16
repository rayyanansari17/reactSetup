import React from 'react'

const App = ()=>{
  return(
    <>
    <div className='bg-blue-900 min-h-screen'>
    <h1 className='text-3xl font-bold underline text-blue-400'>
      hello everyone
    </h1>
    <img src="image1.png" alt="my photo" className='h-200 w-180 rounded-full object-cover mx-auto brightness-100 contrast-100 drop-shadow-xl/50 backdrop-blur-xs  ' />
    <br /><br />

    <table className="border-collapse border border-gray-400 ... mx-auto">
  <thead>
    <tr>
      <th className="border border-gray-300 ...">State</th>
      <th className="border border-gray-300 ...">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-gray-300 ...">Indiana</td>
      <td className="border border-gray-300 ...">Indianapolis</td>
    </tr>
    <tr>
      <td className="border border-gray-300 ...">Ohio</td>
      <td className="border border-gray-300 ...">Columbus</td>
    </tr>
    <tr>
      <td className="border border-gray-300 ...">Michigan</td>
      <td className="border border-gray-300 ...">Detroit</td>
    </tr>
  </tbody>
</table>



    </div>

    
    </>
  )
}

export default App