import React from 'react'

//일반 함수 만들기
function greeting(){
  return "집에가고싶다"
}
const Jsx2Function = () => {
  return (
    <div>
      <h2>Jsx - 함수 호출하기</h2>
      <p><strong>{greeting()}</strong></p>

    </div>
  )
}

export default Jsx2Function