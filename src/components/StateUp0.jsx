import React, { useState } from 'react'

function Child({msg}){
    return(
        <div>
            <p>{msg}</p>
        </div>
    )
}

const StateUp0 = () => {
    //1. 상태변수
    const [msg, setMeg] = useState("안녕 나 부모");
    //2. 메서드
    //3. 화면에 보여질 내용
  return (
    <div>
        <h2>부모가 가진 값 자식에게 전달</h2>
        <Child msg ={msg}/>
    </div>
  )
}

export default StateUp0