export const GET_CONFIGURATION = 'GET_CONFIGURATION';
export const RECEIVE_CONFIGURATION = 'RECEIVE_CONFIGURATION';
export const ON_ERROR = 'ON_ERROR';

export function getConfiguration(payload) {
  return {
    type: GET_CONFIGURATION,
    payload,
  };
}

export function receiveConfiguration(payload) {
  return {
    type: RECEIVE_CONFIGURATION,
    payload,
  };
}

export function onError() {
  return {
    type: ON_ERROR,
  };
}
