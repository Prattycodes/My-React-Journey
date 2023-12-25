import React, { useState } from 'react'

function Products({naam, data}) {
    const [a, b]= useState(false);
  return (
    <div className='text-white'>
    <div className="w-full h-96 bg-zinc-700 ">
        <h1>{naam}</h1>
        <h1>{data.age}</h1>
        <h1>{data.name}</h1>
        <h1 className={`${a===false? "text-red-600": "text-blue-600"}`}>{a===false? "Hello": "Hii"}</h1>
        <button onClick={()=>b(!a)}>Change</button>
    </div>
    </div>
  )
}

export default Products