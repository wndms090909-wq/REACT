import React, { useState } from 'react'

function Display({value}) {
    return (
        <div>
            msg: {value}
        </div>
    )
}
function InputText({value, onSend}) {
    return (
        <div>
            <input type="text" value={value} onChange={(e) => onSend(e.target.value)}/>
        </div> 
    )
}
const StateUp4 = () => {
    //1. 
    const [text, setText] = useState("부모가 관리하는 텍스트")
    return (
        <div>
            <h2>형제간 데이터 공유</h2>
            <Display  value={text}/>
            <InputText value={text} onSend={setText}/>
        </div>

    )
}

export default StateUp4