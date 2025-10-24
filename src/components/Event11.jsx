import React, { useState } from 'react'

const Event11 = () => {
    // 1. 변수
    const [items, setItems] = useState([]);
    const [input, setInput] = useState("");

    // 2. 메서드
    const addItem = () => {
        console.log("추가");
        setItems([...items, input])
        setInput("");
    }
    
    const handleKey = (e) => {
        console.log(e);
        console.log(e.key);
        if(e.key === "Enter"){
            addItem();
        }
    }

    // 3. 화면에 보여질 내용
    return (
        <div>
            <h2>리스트 추가하기</h2>
            <p>
                <input type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKey}
                />
                <button onClick={addItem}>추가</button>
            </p>
            <ul>
                {items.map((item, id) =>
                    <li key={id}>{item}</li>
                )}
            </ul>
        </div>
    )
}

export default Event11