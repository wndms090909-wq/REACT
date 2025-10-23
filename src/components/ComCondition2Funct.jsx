import React, { useState } from 'react'

const ComCondition2Funct = () => {
    //1. 상태변수 저장
    //이전에는 함수형 컴포넌트에서 생태변수를 사용할 수 없었다
    //사용하기 위해서는 useState()를 사용해야된다
    // const [상태변수, 변수를변경할메서드] = useState(값)
    let [isToggle, setToggle] = useState(true);
    let [count, setCount] = useState(1);
    //2. 메서드
    let toggle = () => {
        console.log("함수 변수");
        //변수를 변경할 메서드 (이전데이터를받을변수 => 처리할명령어)
        setToggle(prev => !prev);
        setCount(c => c + 1);
    }
    //3. 화면에 뿌려줄 DOM
    return (
        <div>
            <p>버튼을 클릭하세요</p>
            <p>{count}</p>
            <button onClick={toggle}>{isToggle ? "ON" : "OFF"}</button>
        </div>
    )
}

export default ComCondition2Funct