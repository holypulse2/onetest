import { RECEIVE_CONFIGURATION, ON_ERROR } from '../actions/configuration';

const initialState = {
  configuration: {},
  error: null,
};

function configurationReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CONFIGURATION:
      return {
        ...state,
        configuration: action.payload && action.payload.data
      };
    case ON_ERROR:
      return {
        ...state,
        error: true 
      };
    default:
      return state;
  }
}

export default configurationReducer;
