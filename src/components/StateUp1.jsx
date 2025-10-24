import React from 'react'

function Child({onAlert}) {
    return (
        <div>
            <button onClick={onAlert}>경고창</button>
        </div>
    )
}

const StateUp1 = () => {
    //1.
    //2.
    const hadnleAlert = () => {
        alert("자식이 클릭 부모의 메서드 실행")
    }
    return (
        <div>
            <h2>State 끌어올리기</h2>
            <p>자식요소에서 이벤트가 발생시 부모가 가지고 있는 변수 또는 메서드 실행</p>
            <Child onAlert={hadnleAlert}/>
        </div>
    )
}

export default StateUp1