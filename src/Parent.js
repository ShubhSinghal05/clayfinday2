import React, { useState } from 'react'
import Childone from "./Childone.js"

const Parent = () => {
    const [arr, setArr] = useState([
        { name: "shubh", age: 25, city: "delhi" },
        { name: "reddy", age: 23, city: "karnataka" },
        { name: "bahubali", age: 35, city: "Maheshmati" }
    ])
    return (
        <div><Childone users={arr} /></div>
    )
}

export default Parent