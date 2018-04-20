import {combineReducers } from 'redux'
import { all } from 'redux-saga/effects';


//List of Reducer
import {Reducer} from './Reducer1';





//List of Watchers
import {Watcher} from './Reducer1/saga';


export function rootReducer(asyncReducers) {
  return combineReducers({
      state: Reducer,

      ...asyncReducers
  });
}

export function* rootSaga (){

  yield all([
    Watcher(),

  ])

}
