import React, { useState } from 'react'

const Event9Multi = () => {
    // 1. 상태변수 - 오브젝트
    const [form, setForm] = useState({ uname: "", email: "" })

    // 2. 상태변수를 변경시킬 메서드
    const handleSubmit = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        // let name = e.target.name;
        // let value = e.target.value;
        // //
        // const newForm = {
        //     uname:form.name,
        //     email:form.email
        // }
        // newForm[name]=value;
        // setForm(newForm);

        // 줄여서 쓰는 방법
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    // 3. 화면에 보여질 내용
    return (
        <div>
            <h2>multi input</h2>
            <input type="text"
                name="uname"
                value={form.uname}
                onChange={handleSubmit} />

            <input type="email"
                name="email"
                value={form.email}
                onChange={handleSubmit} />
        </div>
    )
}

export default Event9Multi