import { FB_LOGIN_SUCCESS, FB_LOGIN_FAIL } from '../actions/types'

export default (state = {}, action) => {
  switch (action) {
    case FB_LOGIN_SUCCESS:
      return { token: action.payload }
    case FB_LOGIN_FAIL:
      return { token: null }
    default:
      return state
  }
}