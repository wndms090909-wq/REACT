import React from 'react'

function Profile({name,img}){
    return (
        <div>
            <h2>{name}</h2>
            <p><img src={img} alt="" /></p>
        </div>
    )
}

const ComCombine1 = () => {
  return (
    <div>
        <h2>컴포넌트 합성연습</h2>
        <p>속성값이 같거나 다른 여러개의 컴포넌트를 삽입하는것을 말한다</p>
        <Profile name="홍길동" img="./images/magazine-1.jpg"/>
        <Profile name="김철수" img="./images/magazine-2.jpg"/>
        <Profile name="이영희" img="./images/magazine-3.jpg"/>
    </div>
  )
}

export default ComCombine1