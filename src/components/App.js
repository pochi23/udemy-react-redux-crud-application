
import React, { Component } from 'react';

// stateやactionとcomponentを紐づける機能であるconnectをインポートする
import { connect } from "react-redux"

// actionCreatorをインポートする
import { increment, decrement} from "../actions"

class App extends Component {
  render() {
    // 既にpropsにはProvider機能によって集約されたstateやactionCreator(メソッド)がプロパティとして渡ってきている
    const props = this.props
    // console.log(this)
    return(
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={ props.increment }>+1</button>
        <button onClick={ props.decrement }>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })

// actionCreatorをreducerに渡すmapDispatchToPropsという処理
const mapDispatchToProps = dispatch => ({
  increment: function(){dispatch(increment())},
  // 上の記法でも下の記法でもどちらでもい
  decrement: () => dispatch(decrement())
})
// 上記の省略形
// const mapDispatchToProps = ({increment, decrement})

export default connect(mapStateToProps, mapDispatchToProps)(App);
