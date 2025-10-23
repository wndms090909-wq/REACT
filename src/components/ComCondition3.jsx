import React from 'react'
//상품의 목록을 표시해줄 컴포넌트 li
function GoodsItem({ kind, isHas }) {
    if (isHas) {
        return (
            <li>{kind}</li>
        )
    } else {
        return (
            <li>{kind} <button>품절</button></li>
        )
    }
}
const ComCondition3 = () => {
    return (
        <div>
            <h2>상품목록출력하기</h2>
            <ul>
                <GoodsItem kind="자켓" isHas={true} />
                <GoodsItem kind="상의" isHas={false} />
                <GoodsItem kind="바지" isHas={false} />
            </ul>
        </div>
    )
}

export default ComCondition3