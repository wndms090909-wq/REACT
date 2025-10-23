import React from 'react'

const ComFunctProps1 = ({name,age}) => {
  return (
    <div>
        <h2>컴포넌트 속성값 - props</h2>
        <p>안녕 {name} 만나서 반가워~ {age}살이야</p>
    </div>
  )
}

export default ComFunctProps1