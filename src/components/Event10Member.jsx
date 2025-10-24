import React, { useState } from 'react'

const Event10Member = () => {
    let initForm = {
        name: "",
        email: "",
        password: ""
    }

    // 1. 상태변수
    const [form, setForm] = useState(initForm);

    // 2. 메서드
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`가입완료 이름: ${form.name}, 이메일: ${form.email}`)
        // 보내고 난 다음 내용물 비우기
        setForm({ name: "", email: "", password: "" })
        // setForm("");
    }

    // 3. 화면에 보여질 내용
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>회원가입폼</h2>
                <input name="name" value={form.name}
                    onChange={handleChange} />
                <br />
                <input name="email" value={form.email}
                    onChange={handleChange} />
                <br />
                <input name="password" value={form.password}
                    onChange={handleChange} />
                <br />
                <button type="submit">가입하기</button>
            </form>
        </div>
    )
}

export default Event10Member