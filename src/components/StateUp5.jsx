import React, { useState } from 'react'

function Checkbox({ label, onToggle }) {
    return (
        <div>
            <input type="checkbox" onChange={() => onToggle(label)} />{label}
        </div>
    )
}
const StateUp5 = () => {
    //1. 변수
    //일반 배열
    let arr = ["운동", "독서", "음악감상"]
    //싱태변수 배열
    const [selected, setSelected] = useState([]);
    //2. 메서드
    const handleToggle = (label) => {
        console.log("toggle");
        //선택한 요소를 저장한 selected 배열 안에 클릭한 라벨이 있는지를 체크하여 같은값이 있으면
        //이미 selected 배열에 있으니, 제거하고 없으면 추가로 넣어주면 된다
        if (selected.includes(label)) {
            setSelected(selected.filter((s) => s !== label))
        }
        else {
            setSelected([...selected, label]);
        }
    }
    //3. 화면에 보여질 내용
    return (
        <div>
            <h2>체크박스</h2>
            <p>선택: {selected}</p>
            <div>
                {arr.map((item, id) =>
                    <Checkbox key={id} label={item} onToggle={handleToggle} />
                )}
            </div>
        </div>
    )
}

export default StateUp5