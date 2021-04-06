import React,{useRef} from 'react'
import {observer} from 'mobx-react'
import {useStores} from '../stores'

const Component = observer(() => {
  console.log(useStores())
  const {AuthStore} = useStores()
  const inputRef = useRef()
  console.log(AuthStore)
  const bindChange = e => {
    AuthStore.setUsername(inputRef.current.value)
  }
  return (
    <>
      <h1>Login: {AuthStore.values.username}</h1>
      <input onChange={bindChange} type="text" ref={inputRef}/>
    </>
  )
})

export default Component