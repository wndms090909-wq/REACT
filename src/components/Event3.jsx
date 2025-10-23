import React from 'react'

const Event3 = () => {
    const handleOver = () => {
        console.log("마우스 들어옴")
    }
    const handleOut = () => {
        console.log("마우스 벗어남")
    }
    return (
        <div
            onMouseOver={handleOver}
            onMouseOut={handleOut}>
            <h2>마우스 오버 아웃</h2>
            <p>마우스를 올려주세요</p>
        </div>
    )
}

export default Event3