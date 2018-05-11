import theme from '../../js/theme'

// Initial state of the feature
const initialState = {
  Language: 'En',
  Theme: theme.main,
  modalDisplay: false,
  Modal:"Contact"
};

export function UIReducer(state = initialState, action) {
  switch (action.type) {
      case 'CHANGE_LANG':
          return  {
              ...state,
              Language: action.payload
          };
      case 'CHANGE_THEME':
          return  {
              ...state,
              Theme: action.payload
          };
      case 'MODAL_DISPLAY':
          return  {
              ...state,
              modalDisplay: action.payload.flag,
              Modal: action.payload.type
          };
      case 'MODAL_HIDE':
          return  {
              ...state,
              modalDisplay: action.payload
          };
      default:
          return state;
  }
}

export function UIAction(data) {
  switch (data.type) {
      case 'CHANGE_LANG':
          return  {
              type: data.type,
              payload: data.payload
          };
      case 'CHANGE_THEME':
          return  {
              type: data.type,
              payload: (data.payload === 'Main'&&theme.main) || (data.payload === 'Blue'&&theme.blue)
          };
      case 'MODAL_DISPLAY':
          return  {
              type: data.type,
              payload: data.payload
          };
      case 'MODAL_HIDE':
          return  {
              type: data.type,
              payload: data.payload
          };
      default:
          return (console.log('no action with that name'));
  }
}
