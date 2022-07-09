import React from 'react'

const StepComplete = () => {
  const handleClick = () => {
    console.log('complete clicked');
  }
  return (
    <>
      <button onClick={handleClick}>
        Step Complete
      </button>
    </>
  )
}

export default StepComplete