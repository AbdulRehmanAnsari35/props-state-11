import React from 'react'

const ChildComponent = (props :any) => {
    console.log(props)
  return (
    <main>
        <h1 className='text-6xl'>{props.name}</h1>
        
    </main>
  )
}

export default ChildComponent

