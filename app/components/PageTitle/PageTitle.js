import React from 'react'

const PageTitle = ({totalSum}) => {
  return (
    <div className="mb-5 w-full">
    <h1 className="text-black text-4xl font-bold">Total sum: {totalSum}</h1>
  </div>
  )
}

export default PageTitle