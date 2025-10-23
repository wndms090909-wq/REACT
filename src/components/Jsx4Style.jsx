import React from 'react'

const Jsx4Style = () => {
    let style = {color:"blue", fontSize: "30px"};
    return (
        <div>Jsx4Style
            <h2>JSX - 스타일</h2>
            <p style={style}>inline일 경우</p>

        </div>
    )
}

export default Jsx4Style