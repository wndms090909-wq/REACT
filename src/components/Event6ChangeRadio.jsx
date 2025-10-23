import React, { useState } from 'react'

const Event6ChangeRadio = () => {
    //1. 성별을 보여줄 상태변수
    const [gender, setGender] = useState("");
    //2. 성별을 변경시킬 상태변수값을 변경할 메서드
    const handleChange = (e) => {
        console.log(e.target.value);
        setGender(e.target.value);
    }
    //3. 화면에 보여줄 내용
    return (
        <div>
            <h2>선택한 성별 찾기 - 라디오</h2>
            <p>선택한 성별: {gender}</p>
            <label>
                <input type="radio"  name="gender" value="남자"
                  onChange={handleChange}/>남자
            </label>
            <label>
                <input type="radio"  name="gender" value="여자"
                  onChange={handleChange}/>여자
            </label>
        </div>
    )
}

export default Event6ChangeRadio