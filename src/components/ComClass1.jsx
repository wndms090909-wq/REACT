import { Component } from "react";

class ComClass1 extends Component{
    render(){
        return (
            <div>
                <h2>클래스 컴포넌트</h2>
                <p>화면에 보여줄 내용은 반드시 render 안에 넣어야한다</p>
                <p>render 안에는 함수값을 반환시키라는 return</p>
                <p>return안에는 전체를 묶어줄 태그를 사용해야한다</p>
            </div>
        )
    }
}

export default ComClass1;