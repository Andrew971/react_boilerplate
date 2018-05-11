import {combineReducers } from 'redux'
import { all } from 'redux-saga/effects';


//List of Reducer
import {UIReducer} from './UI';
import {Reducer1} from './Reducer1';





//List of Watchers
import {Watcher} from './Reducer1/saga';


export function rootReducer(asyncReducers) {
  return combineReducers({
      UI: UIReducer,
      state: Reducer1,

      ...asyncReducers
  });
}

export function* rootSaga (){

  yield all([
    Watcher(),

  ])

}
