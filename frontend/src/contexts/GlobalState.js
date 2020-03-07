import React, { createContext, useReducer } from 'react'
import { AppReducers } from './AppReducers'

// 初始化状态，未登陆
const initState = {
  userInfo: {
    email: null,
    password: null,
    token: null
  }
}
const backendURL = 'http://localhost:5000/'

// create context
export const GlobalContext = createContext(initState)
// create context provider
export const GlobalProvider = ({ children }) => {
  // 初始化reducer
  const [state, dispatch] = useReducer(AppReducers, initState)
  // 发起登陆
  function signin(userInfo) {
    fetch(backendURL + 'signin', {
      method: 'post',
      body: JSON.stringify(userInfo),
      headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json'
      },
      mode: 'cors'
    }).then(response => {
      if (response.status === 400) {
        console.log('wrong pwd, recheck please')
        response.json().then((data) => {
          console.log(data)
        })
      } else {
        response.json().then((data) => {
          console.log(data)
          dispatch(data)
        })
      }
    })
  }

  return (<GlobalContext.Provider value={{ signin, userInfo: state.userInfo }}>
    {children}
  </GlobalContext.Provider>)
}


