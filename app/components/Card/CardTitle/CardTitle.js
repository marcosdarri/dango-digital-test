import React from 'react'

const CardTitle = ({fontSize, product, newTitle}) => {
  return (
    <div className="text-black font-bold mb-2 font-bold">
    <h1
      style={{
        fontSize: `${fontSize}px`,
      }}
      className="text-center">
      {newTitle === "" ? product.title : newTitle}
    </h1>
  </div>
  )
}

export default CardTitle