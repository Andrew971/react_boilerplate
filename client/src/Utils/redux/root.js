import {combineReducers } from 'redux'
import { all } from 'redux-saga/effects';


//List of Reducer
import {sharedReducer} from '../../Shared/reducer';
import {modalReducer} from '../../Modules/Modal/reducer';





//List of Watchers
import {ModalWatcher} from '../../Modules/Modal/saga';
import {SharedWatcher} from '../../Shared/saga';


export function rootReducer(asyncReducers) {
  return combineReducers({
      sharedState: sharedReducer,
      modal: modalReducer,

      ...asyncReducers
  });
}

export function* rootSaga (){

  yield all([
    SharedWatcher(),
    ModalWatcher(),
  ])

}
