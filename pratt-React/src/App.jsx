// import React, { useState } from 'react'

// function App() {
//   var [a,b]= useState(10);
//   return (
//     <div className='w-full h-screen text-white bg-zinc-900 p-5'>
//     <h1>{a}</h1>
//     <button onClick= {()=>b(a+1)} className='px-3 py-1 bg-green-500 rounded-md text-xs'>Click</button>
//     </div>
//   )
// }

// export default App
import React, { useState } from 'react'
import Products from './Products';

function App() {
  var [a,b]= useState(10);
  return (
    <div className='w-full h-screen bg-zinc-900 text-white p-5'>
    <Products naam="value" data= {{age: 26, name: "Pratham"}}/>
    </div>
  )
}

export default App