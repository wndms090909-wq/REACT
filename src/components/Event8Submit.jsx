import React, { useState } from 'react'

const Event8Submit = () => {
    // 1. 상태변수
    const [text, setText] = useState("");

    // 2. 상태변수 값 (또는 기타 스크립트) 변경 메서드
    const handleSubmit = (e) => {
        // 기본 이벤트 막아주기
        e.preventDefault();
        // 경고창으로 입력된 내용물 보기
        alert(`입력한 내용은 ${text}`);
        setText("");
    }

    return (
        <div>
            <h2>form submit</h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)} />
                {/* <input type="submit" value="제출" /> */}
                <button type="submit">제출</button>
            </form>
        </div>
    )
}

export default Event8Submit