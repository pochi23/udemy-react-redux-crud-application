// 配列構造をデータ取得が得意なオブジェクト構造に変換するlodashをインポート
import _ from "lodash"

import { READ_EVENTS } from "../actions"

export default (events = {}, action) => {
  switch(action.type) {
    case READ_EVENTS:
      // 取得したデータの構造を配列構造からそれぞれが持つidをキーにしたオブジェクト構造に変えることで、パフォーマンスが上がる。なぜ？
      return _.mapKeys(action.response.data, "id")
    default:
      return events
  }
} 