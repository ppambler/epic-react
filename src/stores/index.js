import {createContext, useContext} from 'react'
import AuthStore from './auth.js'
import UserStore from './user.js'

console.log(AuthStore)
console.log(UserStore)
window.b = UserStore

const context = createContext({
  AuthStore,
  UserStore
})

export const useStores = () => useContext(context) 