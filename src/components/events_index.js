
import React, { Component } from 'react';

// stateやactionとcomponentを紐づける機能であるconnectをインポートする
import { connect } from "react-redux"

import _ from "lodash"

// actionCreatorをインポートする
import { readEvents } from "../actions"


class EventsIndex extends Component {
  componentDidMount() {
    // 既にpropsにはProvider機能によって集約されたstateやactionCreator(メソッド)がプロパティとして渡ってきている
    // console.log(this)
    this.props.readEvents()
  }
  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }
  render() {
    return(
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {this.renderEvents()}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })

// actionCreatorをreducerに渡すmapDispatchToPropsという処理
const mapDispatchToProps = dispatch => ({
  // readEvents: function() { dispatch(readEvents()) },
  // 上の記法でも下の記法でもどちらでもい
  readEvents: () => dispatch(readEvents())
})
// 上記の省略形
// const mapDispatchToProps = ({increment, decrement})

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
