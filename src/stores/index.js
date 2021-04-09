import {createContext, useContext} from 'react'
import AuthStore from './auth.js'
import UserStore from './user.js'
import ImageStore from './image.js'

console.log(AuthStore)
console.log(UserStore)
window.b = UserStore

const context = createContext({
  AuthStore,
  UserStore,
  ImageStore
})

window.stores = {
  AuthStore,
  UserStore,
  ImageStore
}

export const useStores = () => useContext(context) 