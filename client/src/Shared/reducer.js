import Data from '../Utils/Data'
import theme from '../Utils/theme'
const initialState = {
  websiteContent:Data['en'],
  sharedContent:Data.sharedContent,
  targetLanguage:'English',
  Theme:theme['main'],
  modalDisplay: false,
}

export function sharedReducer(state = initialState, action) {
  switch (action.type) {
      case 'ACTION_REQUESTED':
          return  {
              ...state,
              state: action.payload
          };

      default:
          return state;
  }
}

export function sharedAction(data) {
  switch (data.type) {
      case 'ACTION_REQUESTED':
          return  {
              type: data.type,
              payload: data.payload
          };

      default:
          return (console.log('no action with that name'));
  }
}
