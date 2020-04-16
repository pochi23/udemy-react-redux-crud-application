import React from 'react';
import ReactDOM from 'react-dom';

// storeを作成できるcreateStoreをインポート
// middlewareを適用できるようにするapplyMiddlewareをインポート
import { createStore, applyMiddleware } from "redux";

// storeを全てのcomponentに渡す機能を持つProviderをインポート
import { Provider } from "react-redux";

// componentsフォルダからcomponentをインポートしてProviderでstore渡せるようにする
import EventsIndex from './components/events_index';

// actionCreatorには原則的に関数を返すことはできない。が、redux_thunkを利用すればtypeによって定義されるactionの代わりに関数を返すことができるようになる
import thunk from "redux-thunk"

import './index.css';
import reducer from "./reducers";
import * as serviceWorker from './serviceWorker';

// storeを作成する
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  // 作成したstoreがアプリケーション内の全てのcomponentで利用可能にする
  // propsのバケツリレーをしなくてよくなる
  // componentが増えたら上でimportして下に追加していけば良い
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  document.getElementById('root')
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


