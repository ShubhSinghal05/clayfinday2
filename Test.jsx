import React, { useState } from 'react'

const Test = () => {
    let obj = { name: "anna", sirname: "shetty", age: "amar" }
    const [num, setNum] = useState(obj)
    console.log(num)
    return (
        <div>
            <button onClick={() => {
                setNum({ ...obj, name: "katappa" })
            }}>Click</button>
        </div>
    )
}
export default Test