import React from 'react'

const ComFunctProps3 = (props) => {
    return (
        <div>
            <h2>부모로부터 객체의 속성값 전달</h2>
            <h3>{props.name}</h3>
            <p><img src={props.imgUrl} alt="" width={props.imgSize}/></p>
        </div>
    )
}

export default ComFunctProps3