import React, { useState } from 'react'

const Event4Change = () => {
    //1. 상태변수
    //input에 입력한 값을 저장할 변수
    const [text, setText] = useState("");
    //2. 상태변수의 값을 변경할 메서드
    const handleChange = (e) => {
        console.log(e.target.value)
    }
    //3. 화면에 보여질 내용

    return (
        <div>
            <h2>change event</h2>
            <p>input 글자입력, 라디오, 체크박스를 변경, select 옵션 선택</p>
            {/* <input
                type="text"
                placeholder='이름을 입력하세요'
                onChange={(e) => setText(e.target.value)} /> */}
            <input type="text"
                onChange={handleChange} />
            <p>입력한 값: {text}</p>
        </div>
    )
}

export default Event4Change