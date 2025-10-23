import React, { Component } from 'react'

export default class ComClassProps2 extends Component {
  render() {
    return (
      <div>
        <h2>컴포넌트 속성값 - 클래스</h2>
        <p>{this.props.city} 도시는 아직 가려면 {this.props.hour}시간 남았습니다</p>
      </div>
    )
  }
}
