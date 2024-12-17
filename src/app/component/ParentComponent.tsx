// ParentComponent.tsx
import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const name = "Abdul Rehman Ansri"
  return (
    <div>
      <h1 className='mt-12'></h1>
      <ChildComponent name={name} />
    </div>
  )
}

export default ParentComponent

