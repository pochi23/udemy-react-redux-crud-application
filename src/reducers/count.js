import { INCREMENT, DECREMENT } from "../actions"

const initialState = { value: 0 }
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 }
    case DECREMENT:
      if(state.value === 0) return { value: state.value } // stateを更新するのではなく新たにstateを作成する処理にしないとエラー
      return { value: state.value - 1 }
    default:
      return state
  }
}