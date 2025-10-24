import React, { useState } from 'react'

function Button({ walks, onToggle }) {
    return (
        <div>
            <button onClick={onToggle}>{walks ? "stop" : "walk"}</button>
        </div>
    )
}
const StateUp6 = () => {
    //1. 상태변수
    const [walk, setWalk] = useState(false);
    //2. 메서드
    const toggle = () => {
        setWalk(!walk);
    }
    //3. 화면에 보여줄 내용
    return (
        <div>
            <Button walks={walk} onToggle={toggle} />
            <h2>{walk ? "walk" : "stop"} </h2>
        </div>
    )
}

export default StateUp6