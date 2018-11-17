import { AsyncStorage } from 'react-native'
import { Facebook } from 'expo'

import { FB_LOGIN_SUCCESS, FB_LOGIN_FAIL } from './types'

// how to use async storage
// AsyncStorage.setItem('fb_token', token)
// AsyncStorage.getItem('fb_token')

export const facebookLogin = () => {
  // return function for redux thunk
  return async function (dispatch) {
    let token = await AsyncStorage.getItem('fb_token')
    if (token) {
      // dispatch an action saying FB login done
      dispatch({ type: FB_LOGIN_SUCCESS, payload: token })
    } else {
      // start fb login process
      doFacebookLogin(dispatch)
    }
  }
}

// Could refactor to this by the way!!
// export const facebookLogin = () => async dispatch => {
//   ...
// }

const doFacebookLogin = async dispatch => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync('287008411942623', {
    permissions: ['public_profile']
  })

  // type: cancel mean something went wrong
  if (type === 'cancel') {
    return dispatch({ type: FB_LOGIN_FAIL })
  }

  await AsyncStorage.setItem('fb_token', token)
  dispatch({ type: FB_LOGIN_SUCCESS, payload: token })
}