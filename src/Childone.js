import React from 'react'
import Childtwo from "./Childtwo.js"

const Childone = (props) => {
  const {users} = props
  console.log('users:', users)
  return (
    <div>{users.map((i)=>{
        return <Childtwo name={i.name} age={i.age} city={i.city}></Childtwo>

    })}</div>
  )
}

export default Childone
