import { Fragment } from "react/jsx-runtime";

// function ComFunction2 (){
//     return(
//         <Fragment>
//             <h2>함수 컴포넌트</h2>
//             <p>render 필요없음</p>
//             <p>return안에 전체를 묶어줄 태그를 사용해야한다</p>
//         </Fragment>
//     )
// }
// export default ComFunction2;

// export default function ComFunction2(){
//     return(
//         <Fragment>
//             <h2>함수 컴포넌트2</h2>
//             <p>export를 위에 쓸때</p>
//         </Fragment>
//     )
// }

let ComFunction2 = () => {
    return (
        <Fragment>
            <h2>함수 컴포넌트2</h2>
            <p>화살표함수</p>
        </Fragment>
    )
}

export default ComFunction2;