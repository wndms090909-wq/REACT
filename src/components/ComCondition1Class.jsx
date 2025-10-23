import React, { Component } from 'react'

export default class ComCondition1Class extends Component {
    //1. 변수선언
    constructor(props) {
        super(props)
        this.state = {
            name: "홍길동",
            isToggle: true
        }
        this.toggle = this.toggle.bind(this)
    }
    //2. 메서드
    toggle() {
        //isToggle:false/true
        console.log("호출되었 클릭");
        // this,this.setState(이전자료 =>{
        //     상태변수:어전자료변수
        // })
        this.setState(s =>({
            isToggle: !s.isToggle
        }))
    }
    //3. 붙일내용 - DOM구조
    render() {
        return (
            <div>
                <p>버튼을 클릭해보세요</p>
                <p>button은 isToggle값이 true "ON" false "OFF"</p>
                <button onClick={this.toggle}> {this.state.isToggle ? "ON" : "OFF"}</button>
            </div>
        )
    }
}
