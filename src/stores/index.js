import {createContext, useContext} from 'react'
import {AuthStore} from './auth.js'

console.log(AuthStore)

const context = createContext({
  AuthStore: new AuthStore()
})

export const useStores = () => useContext(context) 