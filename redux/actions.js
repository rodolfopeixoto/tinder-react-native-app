export function login(value) {
  return function(dispatch){
    dispatch({
      type: 'LOGIN',
      payload: value
    });
  }
}