import React from 'react'

const Childtwo = (props) => {
    const {name,age,city}=props
  return (
    <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{city}</h1>
    </div>
  )
}

export default Childtwo