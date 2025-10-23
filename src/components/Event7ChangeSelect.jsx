import React, { useState } from 'react'

const Event7ChangeSelect = () => {
    //1. 상태변수
    const [fruit, setFruit] = useState("사과");
    //2. 상태변수 변경
    const handleChange = (e) =>{
        console.log(e.target.value);
        setFruit(e.target.value);
    }
    //3. 화면에 보여질 내용
  return (
    <div>
        <h2>select</h2>
        <p>선택한 과일은: {fruit}</p>
        <select onChange={handleChange}>
            <option value="사과">사과</option>
            <option value="바나나">바나나</option>
            <option value="오렌지">오렌지</option>
            <option value="배">배</option>
            <option value="감">감</option>
        </select>
    </div>
  )
}

export default Event7ChangeSelect