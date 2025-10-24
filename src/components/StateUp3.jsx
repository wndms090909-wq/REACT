import React, { useState } from 'react'

function Child({ name, setChange }) {
    return (
        <div>
            <input value={name} onChange={(e) => setChange(e.target.value) } />
        </div>
    )
}
const StateUp3 = () => {
    //1. 
    const [name, setName] = useState("")
    //2. 
    // setName((이전데이터 =>) 변경할내용)
    return (
        <div>
            <h2>자식input 부모가 데이터 관리</h2>
            <p>입력한 이름은: {name}</p>
            <Child name={name} setChange={setName} />
        </div>
    )
}

export default StateUp3