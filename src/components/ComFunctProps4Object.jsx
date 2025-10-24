import React from 'react'

const ComFunctProps4Object = (props) => {
    // return (
    //     <div>
    //         <h2>부모의 객체 전달받기</h2>
    //         <h3>{props.users.name}</h3>
    //         <p><img src={props.users.imageUrl} width={props.users.imageSize} alt="" /></p>
    //     </div>
    // )
    const { name, imageUrl, imageSize } = props.users;
    return (
        <div>
            <h2>부모의 객체 전달-구조분해할당</h2>
            <h3>{name}</h3>
            <p><img src={imageUrl} width={imageSize} /></p>
        </div>
    )
}

export default ComFunctProps4Object