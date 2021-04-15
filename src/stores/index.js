import {createContext, useContext} from 'react'
import AuthStore from './auth.js'
import UserStore from './user.js'
import ImageStore from './image.js'
import HistoryStore from './history.js'

window.b = UserStore

const context = createContext({
  AuthStore,
  UserStore,
  ImageStore,
  HistoryStore
})

window.stores = {
  AuthStore,
  UserStore,
  ImageStore
}

export const useStores = () => useContext(context) 